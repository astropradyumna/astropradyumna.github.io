import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Link } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ScienceIcon from '@mui/icons-material/Science';

const Resources = () => {
  const resourceData = [
    {
      id: 1,
      title: "Machine Learning for Astronomy",
      category: "Papers",
      description: "Essential research papers on applying machine learning techniques to astronomical data analysis and cosmic phenomena.",
      icon: <ArticleIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#12b5e5",
      resources: [
        { name: "Deep Learning for Galaxy Classification", url: "#" },
        { name: "Neural Networks in Stellar Parameter Estimation", url: "#" },
        { name: "ML Approaches to Dark Matter Detection", url: "#" }
      ]
    },
    {
      id: 2,
      title: "Astrophysics Datasets",
      category: "Data",
      description: "Curated datasets for training machine learning models on astronomical observations and simulations.",
      icon: <StorageIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#0ba95b",
      resources: [
        { name: "Sloan Digital Sky Survey (SDSS)", url: "https://www.sdss.org/" },
        { name: "Gaia Data Archive", url: "https://gea.esac.esa.int/archive/" },
        { name: "IllustrisTNG Simulation Data", url: "https://www.tng-project.org/" }
      ]
    },
    {
      id: 3,
      title: "Deep Learning Frameworks",
      category: "Tools",
      description: "Specialized tools and libraries for implementing deep learning in astrophysical research.",
      icon: <PsychologyIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#7b5ea7",
      resources: [
        { name: "AstroPy - Python Astronomy", url: "https://www.astropy.org/" },
        { name: "TensorFlow Astronomy Models", url: "#" },
        { name: "PyTorch for Cosmic Data", url: "#" }
      ]
    },
    {
      id: 4,
      title: "Code Repositories",
      category: "GitHub",
      description: "Open-source implementations of ML/DL algorithms for astronomical data processing and analysis.",
      icon: <CodeIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#fcba28",
      resources: [
        { name: "Galaxy Zoo ML Models", url: "#" },
        { name: "Exoplanet Detection Algorithms", url: "#" },
        { name: "Cosmological Parameter Estimation", url: "#" }
      ]
    },
    {
      id: 5,
      title: "Educational Resources",
      category: "Learning",
      description: "Courses, tutorials, and workshops on machine learning applications in astrophysics and cosmology.",
      icon: <SchoolIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#f38ba3",
      resources: [
        { name: "Astro-ML Course Materials", url: "#" },
        { name: "Cosmic Data Science Workshops", url: "#" },
        { name: "Neural Networks for Astronomers", url: "#" }
      ]
    },
    {
      id: 6,
      title: "Research Applications",
      category: "Science",
      description: "Current applications of AI/ML in cutting-edge astrophysical research and discoveries.",
      icon: <ScienceIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#e74c3c",
      resources: [
        { name: "AI in Gravitational Wave Detection", url: "#" },
        { name: "ML for Dark Energy Surveys", url: "#" },
        { name: "Neural Networks in Galaxy Evolution", url: "#" }
      ]
    }
  ];

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        paddingTop: { xs: 4, md: 6 },
        position: 'relative',
        marginTop: 4,
        minHeight: '100vh'
      }}
    >
      {/* Section Title */}
      <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
        <Typography 
          variant="h3" 
          sx={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontWeight: 'bold',
            color: '#f38ba3',
            marginBottom: 2,
            fontSize: { xs: '2rem', md: '2.5rem' }
          }}
        >
          ML/DL Astrophysics Resources
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: '#848074',
            marginBottom: 3
          }}
        >
          Curated resources for machine learning and deep learning in astronomical research
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }}
      >
        {/* Timeline Line */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: 0,
            bottom: 0,
            width: '6px',
            background: '#848074',
            border: '2px solid #231f20',
            borderRadius: '3px',
            zIndex: 1
          }}
        />

        {resourceData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Box
              key={item.id}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: 5
              }}
            >
              {/* Timeline Marker */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: '20px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: item.color,
                  border: '3px solid #231f20',
                  zIndex: 3,
                  boxShadow: '0 3px 10px rgba(35, 31, 32, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}
              >
                {item.icon}
              </Box>

              {/* Content Card */}
              <Box
                sx={{
                  width: { xs: '350px', md: '380px' },
                  marginLeft: { xs: '40px', md: isLeft ? 0 : 'auto' },
                  marginRight: { xs: 0, md: isLeft ? 'auto' : 0 },
                  paddingLeft: { xs: 0, md: isLeft ? 0 : '30px' },
                  paddingRight: { xs: 0, md: isLeft ? '30px' : 0 }
                }}
              >
                <Card
                  sx={{
                    background: '#f9f4da',
                    borderRadius: 2,
                    boxShadow: '0 4px 12px rgba(35, 31, 32, 0.3)',
                    border: '3px solid #231f20',
                    overflow: 'visible',
                    position: 'relative'
                  }}
                >
                  <CardContent sx={{ padding: 3 }}>
                    {/* Category Badge */}
                    <Chip
                      label={item.category}
                      size="small"
                      sx={{ 
                        marginBottom: 1,
                        backgroundColor: item.color,
                        color: 'white',
                        border: '1px solid #231f20',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: 'bold'
                      }}
                    />

                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#231f20',
                        marginBottom: 1,
                        fontSize: '1.2rem',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      sx={{
                        color: '#231f20',
                        marginBottom: 2,
                        lineHeight: 1.5,
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {item.description}
                    </Typography>

                    {/* Resource Links */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {item.resources.map((resource, idx) => (
                        <Link
                          key={idx}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 12px',
                            backgroundColor: 'rgba(132, 128, 116, 0.1)',
                            border: '2px solid #848074',
                            borderRadius: '6px',
                            textDecoration: 'none',
                            color: '#231f20',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontSize: '0.9rem',
                            fontWeight: 'medium',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                              backgroundColor: item.color,
                              color: 'white',
                              borderColor: '#231f20',
                              transform: 'translateX(4px)'
                            }
                          }}
                        >
                          {resource.name}
                        </Link>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Resources;