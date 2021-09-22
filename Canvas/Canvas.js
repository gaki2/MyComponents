import React, { useEffect, useRef, useState } from "react";
import "./index.css";

function draw(ctx) {
  ctx.beginPath();
  ctx.rect(20, 20, 150, 150);
  ctx.stroke();
}

export function Canvas() {
  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState(null);
  const pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

  const resize = () => {
    console.log(`resize`);
    const canvas = canvasRef.current;
    const context = ctx ? ctx : canvas.getContext("2d");

    const stageWidth = window.innerWidth;
    const stageHeight = window.innerHeight;
    canvas.width = stageWidth * pixelRatio;
    canvas.height = stageHeight * pixelRatio;
    context.scale(pixelRatio, pixelRatio);

    setCtx(context);
    // 원래는 여기서 draw 를 하는게 아니라 requestAnimationFrame 을 써야댐
    draw(context);
  };

  useEffect(() => resize(), []);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  return (
    <div>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
