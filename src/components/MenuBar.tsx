import {
  Box,
  Flex,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import WaveAnimation from './WaveAnimation' // WaveAnimationコンポーネントをインポート
import { useState, useEffect } from 'react'

const MenuBar = ({ showMenuBar }: { showMenuBar: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [transform, setTransform] = useState('translateY(-100%)')

  useEffect(() => {
    if (showMenuBar) {
      setTransform('translateY(0)')
    } else {
      setTransform('translateY(-100%)')
    }
  }, [showMenuBar])

  const wave1 = [
    {
      y: 50,
      length: 0.02,
      amplitude: 5,
      horizontalSpeed: 0.003,
      verticalSpeed: 0.003,
      color: 'rgba(61, 172, 212, 1)',
    },
  ]

  const wave2 = [
    {
      y: 500,
      length: 0.02,
      amplitude: 5,
      horizontalSpeed: 0.003,
      verticalSpeed: 0.003,
      color: 'rgba(61, 172, 212, 1)',
    },
  ]

  return (
    <>
      {/* MenuBar と WaveAnimation のスライドイン部分はそのまま */}
      <Box
        display={{ base: 'none', md: 'block' }}
        position='fixed'
        top='0'
        width='100%'
        zIndex='1000'
        transform={transform}
        transition='transform 0.3s ease-in-out'
      >
        <Flex justifyContent='space-between' alignItems='center' px='6' color='white' height='100%'>
          <Text fontWeight='bold'>
            <Link
              href='/'
              mx='4'
              color='white'
              fontSize='3xl'
              textDecoration='none'
              _hover={{ textDecoration: 'none' }}
            >
              Suzuki8
            </Link>
          </Text>
          <Flex justifyContent='center' alignItems='center'>
            <Link href='#home' mx='3' fontSize='xl'>
              Top
            </Link>
            <Link href='#projects' mx='3' fontSize='xl'>
              Projects
            </Link>
            <Link href='#skills' mx='3' fontSize='xl'>
              Skills
            </Link>
            <Link href='#experience' mx='3' fontSize='xl'>
              Experience
            </Link>
            <Link href='#contact' mx='3' fontSize='xl'>
              Contact
            </Link>
          </Flex>
        </Flex>
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        position='fixed'
        top='0'
        width='100%'
        zIndex='1000'
        transform={transform}
        transition='transform 0.3s ease-in-out'
      >
        <Flex justifyContent='space-between' alignItems='center' px='6'>
          <Text fontWeight='bold'>
            <Link
              href='/'
              mx='4'
              color='white'
              fontSize='3xl'
              textDecoration='none'
              _hover={{ textDecoration: 'none' }}
            >
              Suzuki8
            </Link>
          </Text>
          <IconButton
            icon={<HamburgerIcon w={8} h={8} />}
            aria-label='Open menu'
            onClick={onOpen}
            color='white'
            bg='rgb(49, 130, 20, 0)'
            _hover={{ bg: 'rgba(153, 153, 153, 0.3)' }}
            size='lg'
          />
        </Flex>
        <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent position='relative'>
            <Box
              position='fixed'
              top='0'
              zIndex='1'
              pointerEvents='none'
              transition='transform 0.3s ease-in-out'
            >
              <WaveAnimation waves={wave2} />
            </Box>
            <DrawerCloseButton
              color='white'
              size='lg'
              position='absolute'
              bottom='20px'
              transform='translateX(-50%)'
            />
            <DrawerHeader color='white' zIndex='1'>
              Menu
            </DrawerHeader>
            <DrawerBody zIndex='1'>
              <Link href='/' display='block' py='2' color='white' onClick={onClose}>
                Top
              </Link>
              <Link href='#projects' display='block' py='2' color='white' onClick={onClose}>
                Projects
              </Link>
              <Link href='#skills' display='block' py='2' color='white' onClick={onClose}>
                Skills
              </Link>
              <Link href='#experience' display='block' py='2' color='white' onClick={onClose}>
                Experience
              </Link>
              <Link href='#contact' display='block' py='2' color='white' onClick={onClose}>
                Contact
              </Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Box
        display={{ base: 'block' }}
        position='fixed'
        top='0'
        zIndex='500'
        pointerEvents='none'
        transform={transform}
        transition='transform 0.3s ease-in-out'
      >
        <WaveAnimation waves={wave1} />
      </Box>
    </>
  )
}

export default MenuBar
