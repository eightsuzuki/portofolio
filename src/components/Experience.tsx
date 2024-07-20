import { Box, Heading, Text } from '@chakra-ui/react';

const Experience = () => (
  <Box p={10}>
    <Heading as="h2" size="xl" mb={6}>Experience</Heading>
    <Text fontSize="md" mb={4}>
      <strong>Company 1:</strong> Frontend Developer (2020-2022)
    </Text>
    <Text fontSize="md" mb={4}>
      <strong>Company 2:</strong> Backend Developer (2018-2020)
    </Text>
    <Text fontSize="md" mb={4}>
      <strong>Company 3:</strong> Data Scientist (2016-2018)
    </Text>
  </Box>
);

export default Experience;
