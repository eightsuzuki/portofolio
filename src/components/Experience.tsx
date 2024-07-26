import { Box, Heading, VStack, Flex, Badge, Text } from '@chakra-ui/react';
import React from 'react';

const ExperienceItem = ({ 
  company, 
  position, 
  period, 
  responsibilities 
}: { 
  company: string; 
  position: string; 
  period: string; 
  responsibilities: string[] 
}) => (
  <Box 
    bg="white" 
    p={6} 
    borderRadius="lg" 
    boxShadow="md" 
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
  >
    <Flex justifyContent="space-between" alignItems="center" mb={3}>
      <Heading as="h3" size="md" color="#0077be">{company}</Heading>
      <Badge colorScheme="blue">{period}</Badge>
    </Flex>
    <Text fontWeight="bold" mb={2}>{position}</Text>
    <VStack align="start" spacing={2}>
      {responsibilities.map((resp, index) => (
        <Text key={index}>• {resp}</Text>
      ))}
    </VStack>
  </Box>
);

const Experience: React.FC = () => (
  <Box className="section-container">
    <Heading as="h2" className="section-heading">Experience</Heading>
    <VStack spacing={6} align="stretch" className="section-content">
      <ExperienceItem 
        company="Company 1"
        position="Frontend Developer"
        period="2020-2022"
        responsibilities={[
          "Developed responsive web applications using React and Next.js",
          "Collaborated with UX designers to implement intuitive user interfaces",
          "Optimized application performance, resulting in 30% faster load times"
        ]}
      />
      <ExperienceItem 
        company="Company 2"
        position="Backend Developer"
        period="2018-2020"
        responsibilities={[
          "Designed and implemented RESTful APIs using Node.js and Express",
          "Managed database operations and optimized queries for improved performance",
          "Integrated third-party services and APIs into existing systems"
        ]}
      />
      <ExperienceItem 
        company="Company 3"
        position="Data Scientist"
        period="2016-2018"
        responsibilities={[
          "Developed machine learning models for predictive analytics",
          "Performed data cleaning, preprocessing, and exploratory data analysis",
          "Created data visualizations to communicate insights to stakeholders"
        ]}
      />
    </VStack>
  </Box>
);

export default Experience;
