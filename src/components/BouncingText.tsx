import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const StyledBouncingText = styled(Box)<{ delay: string; duration: string }>`
  display: inline-block;
  animation: ${bounce} ${({ duration }) => duration} ${({ delay }) => delay} infinite;
`;

interface BouncingTextProps {
  char: string;
  delay: string;
  duration: string;
  fontSize: any;
  color: string;
  mx: any;
}

const BouncingText: React.FC<BouncingTextProps> = ({ char, delay, duration, fontSize, color, mx }) => {
  return (
    <StyledBouncingText delay={delay} duration={duration} fontSize={fontSize} color={color} mx={mx}>
      {char}
    </StyledBouncingText>
  );
};

export default BouncingText;
