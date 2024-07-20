import { Box, Heading, Text } from '@chakra-ui/react';

const Contact = () => (
  <Box bg="gray.100" p={10}>
    <Heading as="h2" size="xl" mb={6}>Contact</Heading>
    <Text fontSize="md" mb={4}>
      Feel free to reach out to me at email@example.com.
    </Text>
  </Box>
);

export default Contact;
