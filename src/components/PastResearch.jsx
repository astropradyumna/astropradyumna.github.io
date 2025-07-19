import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const PastResearch = ({ onPageChange }) => {
  return (
    <>
      <Container 
        maxWidth="lg" 
        sx={{ 
          paddingTop: '120px',
          paddingBottom: '2rem',
          color: 'white',
          minHeight: '100vh'
        }}
      >
        <Box sx={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Typography 
            variant="h1" 
            component="h1"
            sx={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
              fontSize: '3rem',
              fontWeight: 800,
              margin: '2rem 0 1.5rem 0',
              letterSpacing: '-0.05em',
              color: '#ffffff'
            }}
          >
            Undergrad Research
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{
              fontSize: '1.2rem',
              lineHeight: 1.7,
              color: '#e0e0e0',
              marginBottom: '3rem'
            }}
          >
            As an undergraduate, I worked primarily on galaxy clusters. Some of my projects are as follows:
          </Typography>

          <Typography 
            variant="h2" 
            component="h2"
            sx={{
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              margin: '2rem 0 1rem 0',
              color: '#fcba28'
            }}
          >
            Testing Radial Acceleration Relation in galaxy clusters
          </Typography>
          
          <Box sx={{ height: '20px' }} />
        </Box>
      </Container>
    </>
  );
};

export default PastResearch;