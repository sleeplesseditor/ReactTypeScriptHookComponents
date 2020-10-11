import React, { useState, useLayoutEffect, useEffect } from "react";
import usePrevious from "../../usePrevious";
import calculateBoundingBoxes from "../../Helpers/boundingBox";

const useListAnimation = ({ children, vertical }) => {
    const [boundingBox, setBoundingBox] = useState({});
    const [prevBoundingBox, setPrevBoundingBox] = useState({});
    const prevChildren = usePrevious(children);
  
    useLayoutEffect(() => {
      const newBoundingBox = calculateBoundingBoxes(children);
      setBoundingBox(newBoundingBox);
    }, [children]);
  
    useLayoutEffect(() => {
      const prevBoundingBox = calculateBoundingBoxes(prevChildren);
      setPrevBoundingBox(prevBoundingBox);
    }, [prevChildren]);
  
    useEffect(() => {
      const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;
  
      if (hasPrevBoundingBox) {
        React.Children.forEach(children, child => {
          const domNode = child.ref.current;
          const firstBox = prevBoundingBox[child.key];
          const lastBox = boundingBox[child.key];
          const changeInX = firstBox.left - lastBox.left;
          const changeInY = firstBox.top - lastBox.top;
  
          if (changeInX || changeInY) {
            requestAnimationFrame(() => {
              // Before the DOM paints, invert child to old position
              domNode.style.transform = `${vertical ? 'translateY' : 'translateX'}(${vertical ? changeInY : changeInX}px)`;
              domNode.style.transition = "transform 0s";
  
              requestAnimationFrame(() => {
                // After the previous frame, remove
                // the transistion to play the animation
                domNode.style.transform = "";
                domNode.style.transition = "transform 500ms";
              });
            });
          }
        });
      }
    }, [boundingBox, prevBoundingBox, children, vertical]);
  
    return children;
};

export default useListAnimation;