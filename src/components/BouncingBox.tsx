import React from "react";
import { Box } from "@chakra-ui/react";
import BouncingText from "./BouncingText";

interface BouncingBoxProps {
  text: string;
  fontSize: any;
  color: string;
  mx: any;
}

const BouncingBox: React.FC<BouncingBoxProps> = ({ text, fontSize, color, mx }) => {
  return (
    <Box>
      {text.split("").map((char, index) => (
        <BouncingText
          key={index}
          char={char}
          delay={`${index * 0.1}s`}
          duration="1s"
          fontSize={fontSize}
          color={color}
          mx={mx}
        />
      ))}
    </Box>
  );
};

export default BouncingBox;
