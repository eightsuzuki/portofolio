import { useEffect, useState } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import AOS from 'aos'
import 'aos/dist/aos.css' // AOSのCSSをインポート
import WaveAnimation from '../components/WaveAnimation'
import FootstepsIconComponent from '../components/FootstepsTracker'
import BouncingBox from '../components/BouncingBox'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(0)
  const [randomText, setRandomText] = useState('')

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    AOS.init({ duration: 1000 }) // AOSの初期化

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    const texts = ['Hello...', 'Welcome!', 'Hi there!', 'Howdy!', 'I`m 8', 'suzuki8']
    const randomIndex = Math.floor(Math.random() * texts.length)
    setRandomText(texts[randomIndex])
  }, [])

  const waves = [
    {
      y: windowHeight * 0.6,
      length: 0.01,
      amplitude: 40,
      horizontalSpeed: 0.001,
      verticalSpeed: 0.001,
      color: 'rgba(0, 119, 190, 0.5)',
    },
    {
      y: windowHeight * 0.7,
      length: 0.015,
      amplitude: 30,
      horizontalSpeed: 0.002,
      verticalSpeed: 0.002,
      color: 'rgba(0, 150, 200, 0.5)',
    },
    {
      y: windowHeight * 0.8,
      length: 0.02,
      amplitude: 20,
      horizontalSpeed: 0.003,
      verticalSpeed: 0.003,
      color: 'rgba(0, 180, 220, 0.5)',
    },
  ]

  return (
    <Box
      w='100%'
      h='100%'
      bg='#faf3e0'
    >
      <Box position='relative'>
        <FootstepsIconComponent />
        <Flex
          id='home'
          direction='column' // 縦方向に並べる
          h='100vh'
          alignItems='center'
          justifyContent='center'
          position='relative'
        >
          <Box
            position='absolute'
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            maxWidth='100%'
            overflow='hidden'
          >
            <BouncingBox
              text={randomText} // ランダムなテキストを表示
              fontSize='50px'
              color='white'
              mx='8px'
            />
          </Box>
          <WaveAnimation waves={waves} />
        </Flex>
        <Flex direction='column' alignItems='center' data-aos='fade-up'>
          <Box id='about' data-aos='fade-up'></Box>
          <Box id='projects' data-aos='fade-up'>
            <Projects />
          </Box>
          <Box id='skills' data-aos='fade-up'>
            <Skills />
          </Box>
          <Box id='experience' data-aos='fade-up'>
            <Experience />
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
