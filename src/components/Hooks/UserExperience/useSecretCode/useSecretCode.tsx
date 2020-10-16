import { useEffect, useState } from "react";
import { useInputEvent } from '../useKeyboardShortcut/useKeyboardShortcuts';

export const useSecretCode = (secretCode: Array<string>) => {
	const [count, setCount] = useState<number>(0);
	const [success, setSuccess] = useState<boolean>(false);
	const key = useInputEvent();

	useEffect(() => {
		// ignore keyup
		if (key == null) return;

		// reset if invalid key
		if (key !== secretCode[count]) {
			setCount(0);
			return;
		}

		// valid key
		setCount((state) => state + 1);

		// code complete
		if (count + 1 === secretCode.length) {
            setSuccess(true);
        }

    }, [key]);
    
    useEffect(() => {
        setSuccess(false)
    }, [success === true])

	return success;
};