import React, { useState, useEffect } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Confetti from "react-confetti";


const ConfettiAnim = () => {
  const { width, height } = useWindowSize();
  const [show, setShow] = useState(true);
  const [opacity, setOpacity] = useState(1.0);

  useEffect(() => {
    // disappearing effect
    let timerFirst = setTimeout(() => {
      setOpacity(0.0);
    }, 4500);
    let timerSecond = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => {
      clearTimeout(timerFirst);
      clearTimeout(timerSecond);
    };
  }, []);

  return (
    <>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={120}
        run={show}
        opacity={opacity}
      />
    </>
  );
};

export default ConfettiAnim;
