import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Cursor = styled.div`
  width: 40px;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  background-color: rgba(245,245,245, 0.5); /* 50% transparent black */
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 10000;
  transition: transform 0.1s ease-in-out; /* Smooth movement */
`;

const CustomCursor = ({ initialPosition }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Move the cursor to the initial position as soon as the component mounts
    if (initialPosition) {
      cursor.style.top = `${initialPosition.y}px`;
      cursor.style.left = `${initialPosition.x}px`;
    }

    // Update the cursor position on mouse move
    const moveCursorOnMouseMove = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    window.addEventListener('mousemove', moveCursorOnMouseMove);

    return () => {
      window.removeEventListener('mousemove', moveCursorOnMouseMove);
    };
  }, [initialPosition]);

  return <Cursor ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
