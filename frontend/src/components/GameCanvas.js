import React, { useEffect, useRef, useCallback } from 'react';

function GameCanvas() {
  const canvasRef = useRef(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Drawing logic here
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const interval = setInterval(draw, 16);
    return () => clearInterval(interval);
  }, [draw]);

  return <canvas ref={canvasRef} className="game-canvas" />;
}

export default GameCanvas;