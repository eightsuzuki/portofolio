import { Box, Flex, Link } from "@chakra-ui/react";

const MenuBar = () => {
  return (
    <Box position="fixed" top="0" width="100%" bg="blue.500" zIndex="1000">
      <Flex justifyContent="center" py="4">
        <Link href="#home" mx="4" color="white">Top</Link>
        <Link href="#projects" mx="4" color="white">Projects</Link>
        <Link href="#skills" mx="4" color="white">Skills</Link>
        <Link href="#experience" mx="4" color="white">Experience</Link>
        <Link href="#contact" mx="4" color="white">Contact</Link>
      </Flex>
    </Box>
  );
};

export default MenuBar;
