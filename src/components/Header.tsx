import { Box, Heading, Text } from '@chakra-ui/react';

const Header = () => (
  <Box p={10}>
    <Heading as="h1" size="2xl" mb={6}>My Portfolio</Heading>
    <Text fontSize="lg" mb={4}>
      Welcome to my portfolio. Here you will find information about my projects, skills, and experience.
    </Text>
  </Box>
);

export default Header;
