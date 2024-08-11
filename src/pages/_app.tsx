import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import '../styles/globals.css';
import MenuBar from "../components/MenuBar";
import Contact from "../components/Contact";

function MyApp({ Component, pageProps }: AppProps) {
  const [showMenuBar, setShowMenuBar] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
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

      return () => {
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setShowMenuBar(true); // ルートページ以外ではMenuBarを常に表示
    }
  }, [windowHeight, router.pathname]);

  return (
    <ChakraProvider >
      <MenuBar showMenuBar={showMenuBar} />
      <Component {...pageProps} />
      <Contact />
    </ChakraProvider>
  );
}

export default MyApp;
