import { useState, useEffect } from 'react';

function useSingleKeyShortcut(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState(false);
  
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true);
      }
    }
  
    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false);
      }
    };
  
    // Add event listeners
    useEffect(() => {
      window.addEventListener('keydown', downHandler);
      window.addEventListener('keyup', upHandler);
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keydown', downHandler);
        window.removeEventListener('keyup', upHandler);
      };
    }, []); // Empty array ensures that effect is only run on mount and unmount
  
    return keyPressed;
}

function useMultiKeyShortcut() {
    const [keysPressed, setKeyPressed] = useState(new Set([]));
  
    function downHandler({ key }) {
      setKeyPressed(keysPressed.add(key));
    }
  
    const upHandler = ({ key }) => {
      keysPressed.delete(key);
      setKeyPressed(keysPressed);
    };
  
    useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      return () => {
        window.removeEventListener("keydown", downHandler);
        window.removeEventListener("keyup", upHandler);
      };
    }, []); 
  
    return keysPressed;
}

function areKeysPressed(keys = [], keysPressed = []) {
  const required = new Set(keys);
  for (var elem of keysPressed) {
    required.delete(elem);
  }
  return required.size === 0;
}

const MultiKeysPressed = ({ keys, keysPressed, value }) => {
  const arePressed = areKeysPressed(keys, keysPressed);

  if (arePressed) {
    return value;
  }
  return null;
};

const useInputEvent = () => {
	const [key, setKey] = useState(null);

	useEffect(() => {
		const keyDownHandler = ({ code }) => setKey(code);
		const keyUpHandler = () => setKey(null);

		global.addEventListener("keydown", keyDownHandler);
		global.addEventListener("keyup", keyUpHandler);

		return () => {
			global.removeEventListener("keydown", keyDownHandler);
			global.removeEventListener("keyup", keyUpHandler);
		};
	}, []);

	return key;
};

export {
    useInputEvent,
    useSingleKeyShortcut,
    useMultiKeyShortcut
};