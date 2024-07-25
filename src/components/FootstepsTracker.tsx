import { useEffect, useState } from "react";
import { Box, Icon } from "@chakra-ui/react";
import FootstepsIcon from "../../public/footsteps-silhouette.svg"; // SVGファイルをインポート

interface Position {
  x: number;
  y: number;
  timestamp: number;
  rotation: number;
  scrollY: number;
}

const FootstepsIconComponent = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [lastPosition, setLastPosition] = useState<{
    x: number;
    y: number;
    scrollY: number;
  } | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number, y: number } | null>(null);
  const [canAddFootprint, setCanAddFootprint] = useState(true);

  useEffect(() => {
    const handleMouseMoveAndScroll = (event: MouseEvent | Event) => {
      const isMouseEvent = event instanceof MouseEvent;
      if (isMouseEvent) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
      if (!canAddFootprint) return;

      const currentPosition = {
        x: isMouseEvent ? event.clientX : mousePosition?.x || window.innerWidth / 2,
        y: isMouseEvent ? event.clientY : mousePosition?.y || window.innerHeight / 2,
        scrollY: window.scrollY,
      };

      if (lastPosition) {
        const mouseDistance = Math.sqrt(
          Math.pow(currentPosition.x - lastPosition.x, 2) +
            Math.pow(currentPosition.y - lastPosition.y, 2)
        );

        const scrollDistance = Math.abs(
          currentPosition.scrollY - lastPosition.scrollY
        );

        if (mouseDistance > 200 || scrollDistance > 200) {
          const angle = isMouseEvent
            ? (Math.atan2(
                currentPosition.y - lastPosition.y,
                currentPosition.x - lastPosition.x
              ) *
                180) /
                Math.PI +
              90
            : (currentPosition.scrollY > lastPosition.scrollY ? 180 : 0); // スクロール方向に基づいて回転

          setPositions((prev) => [
            ...prev,
            { ...currentPosition, timestamp: Date.now(), rotation: angle },
          ]);
          setLastPosition(currentPosition);
          setCanAddFootprint(false);

          // 1秒後に次の足跡を追加可能にする
          setTimeout(() => {
            setCanAddFootprint(true);
          }, 100);
        }
      } else {
        setLastPosition(currentPosition);
      }
    };

    window.addEventListener("mousemove", handleMouseMoveAndScroll);
    window.addEventListener("scroll", handleMouseMoveAndScroll);

    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.filter((pos) => Date.now() - pos.timestamp < 5000)
      );
    }, 100);

    return () => {
      window.removeEventListener("mousemove", handleMouseMoveAndScroll);
      window.removeEventListener("scroll", handleMouseMoveAndScroll);
      clearInterval(interval);
    };
  }, [lastPosition, mousePosition, canAddFootprint]);

  return (
    <>
      {positions.map((pos, index) => {
        const opacity = Math.max(0, 1 - (Date.now() - pos.timestamp) / 5000);
        return (
          <Icon
            key={index}
            position="absolute"
            top={`${pos.y + pos.scrollY}px`}
            left={`${pos.x}px`}
            transform={`translate(-50%, -50%) rotate(${pos.rotation}deg)`}
            transition="opacity 1s"
            opacity={opacity}
            as={FootstepsIcon}
            w={10}
            h={10}
            color="gray.300"
          />
        );
      })}
    </>
  );
};

export default FootstepsIconComponent;
