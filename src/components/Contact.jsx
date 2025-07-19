import React from 'react';
import { Box, Typography, Card, CardContent, Chip, Link } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CampaignIcon from '@mui/icons-material/Campaign';
import ScienceIcon from '@mui/icons-material/Science';

const Contact = () => {
  const contactData = [
    {
      id: 1,
      type: "GitHub",
      label: "Code Repository",
      value: "View Projects",
      href: "https://github.com/astropradyumna",
      icon: <CodeIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#7b5ea7",
      description: "Research code, data analysis scripts, and open-source contributions."
    },
    {
      id: 2,
      type: "X (Twitter)",
      label: "Academic Updates",
      value: "Follow Research",
      href: "https://x.com/PradyumnaSadhu",
      icon: <CampaignIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#f38ba3",
      description: "Research updates, conference highlights, and astrophysics discussions."
    },
    {
      id: 3,
      type: "ORCID",
      label: "Academic Identity",
      value: "View Publications",
      href: "https://orcid.org/0000-0002-3947-6239",
      icon: <ScienceIcon sx={{ fontSize: '1.2rem' }} />,
      color: "#0ba95b",
      description: "Academic publications, research identity, and scholarly contributions."
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
          Get In Touch
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'system-ui, -apple-system, sans-serif',
            color: '#848074',
            marginBottom: 3
          }}
        >
          Connect with me through these professional platforms for research collaboration and academic discussions
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: '600px',
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

        {contactData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Box
              key={item.id}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: 4
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
                  width: { xs: '280px', md: '250px' },
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
                    position: 'relative',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 16px rgba(35, 31, 32, 0.4)'
                    }
                  }}
                >
                  <CardContent sx={{ padding: 2 }}>
                    {/* Platform Badge */}
                    <Chip
                      label={item.type}
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
                        fontSize: '1.1rem',
                        fontFamily: 'system-ui, -apple-system, sans-serif'
                      }}
                    >
                      {item.label}
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

                    {/* Contact Link */}
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 1,
                        padding: '6px 12px',
                        backgroundColor: item.color,
                        color: 'white',
                        borderRadius: '6px',
                        border: '2px solid #231f20',
                        textDecoration: 'none',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 2px 6px rgba(35, 31, 32, 0.3)'
                        }
                      }}
                    >
                      {item.icon}
                      {item.value}
                    </Link>
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

export default Contact;