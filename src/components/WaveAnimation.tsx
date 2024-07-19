"use client"; // 追加

import { useEffect, useRef } from 'react';

const WaveAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // canvasがnullの場合は処理を中断
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // ctxがnullの場合は処理を中断
    let animationFrameId: number;

    // キャンバスサイズの設定
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // 波の設定
    const waves = [
      { y: canvas.height * 0.25, length: 0.01, amplitude: 50, speed: 0.01 },
      { y: canvas.height * 0.5, length: 0.02, amplitude: 30, speed: 0.02 },
      { y: canvas.height * 0.75, length: 0.03, amplitude: 20, speed: 0.03 },
    ];

    const drawWave = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < canvas.width; x++) {
          const dx = x * wave.length + time * wave.speed;
          const y = wave.y + Math.sin(dx) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = 'rgba(0, 119, 190, 0.5)';
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(drawWave);
    };

    drawWave(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />;
};

export default WaveAnimation;
