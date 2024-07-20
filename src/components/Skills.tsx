import { Box, Heading, Text } from '@chakra-ui/react';

const Skills = () => (
  <Box p={10}>
    <Heading as="h2" size="xl" mb={6}>Skills</Heading>
    <Text fontSize="md" mb={4}>
      <strong>Programming Languages:</strong> JavaScript, Python, Java
    </Text>
    <Text fontSize="md" mb={4}>
      <strong>Frameworks:</strong> React, Next.js, Django
    </Text>
    <Text fontSize="md" mb={4}>
      <strong>Tools:</strong> Git, Docker, Kubernetes
    </Text>
  </Box>
);

export default Skills;
