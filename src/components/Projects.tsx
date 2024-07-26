import { Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';

const ProjectItem = ({ title, description }: { title: string; description: string }) => (
  <GridItem 
    bg="white" 
    p={6} 
    borderRadius="lg" 
    boxShadow="md" 
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
  >
    <Heading as="h3" size="md" mb={3} color="#0077be">{title}</Heading>
    <Text>{description}</Text>
  </GridItem>
);

const Projects = () => (
  <Box className="section-container">
    <Heading as="h2" className="section-heading">Projects</Heading>
    <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6} className="section-content">
      <ProjectItem 
        title="Task Management Web App" 
        description="A web application for efficiently managing and organizing tasks, built with React and Node.js."
      />
      <ProjectItem 
        title="Fitness Tracking Mobile App" 
        description="A mobile app for tracking fitness activities, developed using React Native and integrating with various health APIs."
      />
      <ProjectItem 
        title="Stock Price Prediction Model" 
        description="A machine learning model leveraging historical data and current market trends to predict stock prices with high accuracy."
      />
    </Grid>
  </Box>
);

export default Projects;