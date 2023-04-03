// import React, { useContext } from 'react'
import React, { useState, useEffect } from 'react'

export const SpinningComponent = () => {
// function SpinningComponent() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotation(rotation => rotation + 1)
    }, 10);

    return () => {
      clearInterval(intervalId)
    };
  }, []);

  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        //borderRadius: '50%',
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}
