import { useState, useEffect } from 'react';
import { Box, Flex, Link, IconButton, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

const MenuBar = ({ showMenuBar }: { showMenuBar: boolean }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display={{ base: 'none', md: showMenuBar ? 'block' : 'none' }} position="fixed" top="0" width="100%" bg="rgb(49, 130, 206)" zIndex="1000">
        <Flex justifyContent="center" alignItems="center" py="2"> 
          <Link href="#home" mx="2" color="white">Top</Link>
          <Link href="#projects" mx="2" color="white">Projects</Link>
          <Link href="#skills" mx="2" color="white">Skills</Link>
          <Link href="#experience" mx="2" color="white">Experience</Link>
          <Link href="#contact" mx="2" color="white">Contact</Link>
        </Flex>
      </Box>
      <Box display={{ base: showMenuBar ? 'block' : 'none' , md: 'none' }} position="fixed" top="0" width="100%" bg="rgb(49, 130, 206)" zIndex="1000">
        <Flex justifyContent="space-between" alignItems="center" px="4"> 
          <Box color="white" fontWeight="bold">My Portfolio</Box>
          <IconButton
            icon={<HamburgerIcon />}
            aria-label="Open menu"
            onClick={onOpen}
            color="white"
            bg="rgb(49, 130, 206)"
            _hover={{ bg: "rgba(49, 130, 206, 0.8)" }}
          />
        </Flex>
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <Link href="#home" display="block" py="2" onClick={onClose}>Top</Link>
              <Link href="#projects" display="block" py="2" onClick={onClose}>Projects</Link>
              <Link href="#skills" display="block" py="2" onClick={onClose}>Skills</Link>
              <Link href="#experience" display="block" py="2" onClick={onClose}>Experience</Link>
              <Link href="#contact" display="block" py="2" onClick={onClose}>Contact</Link>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default MenuBar;
