import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import WaveAnimation from '../components/WaveAnimation';
import FootstepsIconComponent from '../components/FootstepsTracker';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import MenuBar from "../components/MenuBar";

export default function Home() {
  const waves = [
    { y: 600, length: 0.01, amplitude: 40, horizontalSpeed: 0.001, verticalSpeed: 0.001, color: 'rgba(0, 119, 190, 0.5)' },
    { y: 700, length: 0.015, amplitude: 30, horizontalSpeed: 0.002, verticalSpeed: 0.002, color: 'rgba(0, 150, 200, 0.5)' },
    { y: 800, length: 0.02, amplitude: 20, horizontalSpeed: 0.003, verticalSpeed: 0.003, color: 'rgba(0, 180, 220, 0.5)' },
  ];

  return (

    <Box w="100%" h="100%">
      <MenuBar /> {/* メニューバーを追加 */}
      <Box pt="60px"> {/* メニューバーの高さ分の余白を追加 */}
        <FootstepsIconComponent />
        <Box id="home" h="100vh">
          <Box position="relative" h="100%">
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              fontSize="24px"
              color="blue"
              display="flex"
              alignItems="center"
            >
              {'Loading...'.split('').map((char, index) => (
                <BouncingText
                  key={index}
                  delay={`${index * 0.1}s`}
                  duration="1s"
                  fontSize="50px"
                  color="white"
                  mx="8px"
                >
                  {char}
                </BouncingText>
              ))}
            </Box>
            <WaveAnimation waves={waves} />
          </Box>
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="skills">
          <Skills />
        </Box>
        <Box id="experience">
          <Experience />
        </Box>
        <Box id="contact">
          <Contact />
        </Box>
      </Box>
    </Box>
  );
}

// Define the keyframes for the bounce animation
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

// Create a styled component for the bouncing text
const BouncingText = styled(Box)<{ delay: string; duration: string }>`
  display: inline-block;
  animation: ${bounce} ${({ duration }) => duration} ${({ delay }) => delay} infinite;
`;
