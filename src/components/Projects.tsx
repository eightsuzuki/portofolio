import { Box, Heading, Text } from '@chakra-ui/react';

const Projects = () => (
  <Box  p={10}>
    <Heading as="h2" size="xl" mb={6}>Projects</Heading>
    <Text fontSize="md" mb={4}>
      <strong>Project 1:</strong> A web application for managing tasks.
    </Text>
    <Text fontSize="md" mb={4}>
      <strong>Project 2:</strong> A mobile app for tracking fitness activities.
    </Text>
    <Text fontSize="md" mb={4}>
      <strong>Project 3:</strong> A machine learning model for predicting stock prices.
    </Text>
  </Box>
);

export default Projects;
