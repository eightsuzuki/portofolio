import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOSのCSSをインポート
import WaveAnimation from "../components/WaveAnimation";
import FootstepsIconComponent from "../components/FootstepsTracker";
import MenuBar from "../components/MenuBar";
import BouncingBox from "../components/BouncingBox";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const waveHeight = windowHeight * 0.75; // Waveアニメーションの高さをウィンドウの高さに基づいて設定
      if (scrollY > waveHeight) {
        setShowMenuBar(true);
      } else {
        setShowMenuBar(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    AOS.init({ duration: 1000 }); // AOSの初期化

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowHeight]);

  const waves = [
    {
      y: windowHeight * 0.6,
      length: 0.01,
      amplitude: 40,
      horizontalSpeed: 0.001,
      verticalSpeed: 0.001,
      color: "rgba(0, 119, 190, 0.5)",
    },
    {
      y: windowHeight * 0.7,
      length: 0.015,
      amplitude: 30,
      horizontalSpeed: 0.002,
      verticalSpeed: 0.002,
      color: "rgba(0, 150, 200, 0.5)",
    },
    {
      y: windowHeight * 0.8,
      length: 0.02,
      amplitude: 20,
      horizontalSpeed: 0.003,
      verticalSpeed: 0.003,
      color: "rgba(0, 180, 220, 0.5)",
    },
  ];

  return (
    <Box w="100%" h="100%" bg="#faf3e0">
      <MenuBar showMenuBar={showMenuBar} />
      <Box position="relative">
        <FootstepsIconComponent />
        <Box
          id="home"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Box
            position="absolute"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            maxWidth="100%"
            overflow="hidden"
          >
            <BouncingBox
              text="Hello..."
              fontSize="50px"
              color="white"
              mx="8px"
            />
          </Box>
          <WaveAnimation waves={waves} />
        </Box>
        <Box id="projects" data-aos="fade-up">
          <Projects />
        </Box>
        <Box id="skills" data-aos="fade-up">
          <Skills />
        </Box>
        <Box id="experience" data-aos="fade-up">
          <Experience />
        </Box>
        <Contact />
      </Box>
    </Box>
  );
}
