import { Box, Heading, SimpleGrid, Text, Progress, VStack } from '@chakra-ui/react';
import React from 'react';

const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; level: number }[] }) => (
  <Box bg="white" p={6} borderRadius="lg" boxShadow="md" transition="all 0.3s" _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}>
    <Heading as="h3" size="md" mb={4} color="#0077be">{title}</Heading>
    <VStack spacing={3} align="stretch">
      {skills.map((skill, index) => (
        <Box key={index}>
          <Text fontWeight="bold" mb={1}>{skill.name}</Text>
          <Progress value={skill.level} colorScheme="blue" size="sm" borderRadius="full" />
        </Box>
      ))}
    </VStack>
  </Box>
);

const Skills = () => (
  <Box className="section-container">
    <Heading as="h2" className="section-heading">Skills</Heading>
    <SimpleGrid columns={[1, null, 3]} spacing={8} className="section-content">
      <SkillCategory 
        title="Programming Languages" 
        skills={[
          { name: "JavaScript", level: 90 },
          { name: "Python", level: 85 },
          { name: "Java", level: 75 }
        ]}
      />
      <SkillCategory 
        title="Frameworks" 
        skills={[
          { name: "React", level: 95 },
          { name: "Next.js", level: 85 },
          { name: "Django", level: 80 }
        ]}
      />
      <SkillCategory 
        title="Tools" 
        skills={[
          { name: "Git", level: 90 },
          { name: "Docker", level: 80 },
          { name: "Kubernetes", level: 70 }
        ]}
      />
    </SimpleGrid>
  </Box>
);

export default Skills;