"use client";

import { useEffect, useRef } from 'react';

interface Wave {
  y: number; // 波の初期の高さ
  length: number; // 波の波長
  amplitude: number; // 波の振幅
  horizontalSpeed: number; // 横移動のスピードに変更
  verticalSpeed: number; // 上下移動のスピード
  color: string; // 波の色
}

interface WaveAnimationProps {
  waves: Wave[]; // 波の配列を受け取るプロパティ
}

const WaveAnimation: React.FC<WaveAnimationProps> = ({ waves }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // canvasが存在しない場合は終了
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // コンテキストが取得できない場合は終了
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // 初期サイズ設定

    const drawWave = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア

      waves.forEach((wave, index) => {
        const { y, length, amplitude, horizontalSpeed, verticalSpeed, color } = wave;
        ctx.beginPath();
        ctx.moveTo(0, y);

        for (let x = 0; x < canvas.width; x++) {
          // 波の各ポイントの計算
          const dx = x * length + time * horizontalSpeed;
          const dy = y + Math.sin(dx) * amplitude + Math.sin(time * verticalSpeed + index) * 10;
          ctx.lineTo(x, dy);
        }

        ctx.lineTo(canvas.width, 0); // 波の右端から上にラインを引く
        ctx.lineTo(0, 0); // 上部に戻る
        ctx.closePath();
        ctx.fillStyle = color; // 波の塗りつぶし色を設定
        ctx.fill(); // 波を塗りつぶし

        ctx.strokeStyle = color; // 波の線の色を設定
        ctx.stroke(); // 波の線を描画
      });

      animationFrameId = requestAnimationFrame(drawWave); // アニメーションフレームを要求
    };

    drawWave(0); // 初回の描画

    return () => {
      window.removeEventListener('resize', resizeCanvas); // クリーンアップ時にリサイズイベントを削除
      cancelAnimationFrame(animationFrameId); // クリーンアップ時にアニメーションフレームをキャンセル
    };
  }, [waves]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100vh' }} />; // キャンバスをレンダリング
};

export default WaveAnimation;
