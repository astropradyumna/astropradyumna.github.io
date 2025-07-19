import React, { useState, useEffect, useRef } from 'react';
import { Box, Card, CardContent, Typography, Chip } from '@mui/material';

const Timeline = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  const timelineData = [
    {
      id: 1,
      title: "Started IIT Hyderabad",
      description: "Began B.Tech with Honors in Engineering Physics, focusing on theoretical and experimental physics foundations.",
      year: "2018",
      category: "Education",
      achievements: ["Physics Major", "Strong CGPA"]
    },
    {
      id: 2,
      title: "Research Exploration",
      description: "Started exploring research interests in astrophysics and cosmology during undergraduate coursework.",
      year: "2019",
      category: "Research",
      achievements: ["Research Ready", "Lab Experience"]
    },
    {
      id: 3,
      title: "Academic Excellence Award",
      description: "Recognized for outstanding academic performance and consistent high grades in physics coursework.",
      year: "2020",
      category: "Achievement",
      achievements: ["Top Performer", "CGPA: 9.5/10"]
    },
    {
      id: 4,
      title: "First Research Publication",
      description: "Published first research paper on stellar evolution models, marking entry into academic research.",
      year: "2021",
      category: "Research",
      achievements: ["Published Author", "Peer Review"]
    },
    {
      id: 5,
      title: "Graduate Studies Begin",
      description: "Started PhD in Astrophysics at University of California, Riverside, working with Prof. Laura Sales.",
      year: "2022",
      category: "Education",
      achievements: ["PhD Student", "Teaching Assistant"]
    },
    {
      id: 6,
      title: "Research Grant Awarded",
      description: "Received funding for dark matter research using dwarf galaxies as probes in cosmological simulations.",
      year: "2023",
      category: "Funding",
      achievements: ["Grant Recipient", "Dark Matter Research"]
    },
    {
      id: 7,
      title: "International Conference",
      description: "Presented research findings at Global Astrophysics Summit as keynote speaker on dwarf galaxy predictions.",
      year: "2024",
      category: "Speaking",
      achievements: ["Keynote Speaker", "International Recognition"]
    },
    {
      id: 8,
      title: "Current Research Focus",
      description: "Leading research on dwarf galaxy predictions for upcoming surveys like Vera Rubin and Roman telescopes.",
      year: "2025",
      category: "Research",
      achievements: ["Team Lead", "Future Predictions"]
    }
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => new Set([...prev, index]));
          }
        },
        { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: 2, md: 4 },
        paddingTop: { xs: 4, md: 6 },
        position: 'relative',
        marginTop: 4
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
          Academic Journey
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: '800px',
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
            zIndex: 0
          }}
        />

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Box
              key={item.id}
              ref={el => cardRefs.current[index] = el}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: isLeft ? 'flex-start' : 'flex-end',
                marginBottom: 4,
                opacity: visibleCards.has(index) ? 1 : 0,
                transform: visibleCards.has(index) ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 0.08}s`
              }}
            >
              {/* Timeline Marker */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  top: '20px',
                  width: '50px',
                  height: '30px',
                  borderRadius: '15px',
                  background: '#0ba95b',
                  border: '3px solid #231f20',
                  zIndex: 10,
                  boxShadow: '0 3px 10px rgba(35, 31, 32, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '12px',
                  position: 'relative'
                }}
              >
                {item.year}
              </Box>

              {/* Content Card */}
              <Box
                sx={{
                  width: { xs: '280px', md: '320px' },
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

              <CardContent sx={{ padding: 2 }}>
                {/* Category Badge */}
                <Chip
                  label={item.category}
                  size="small"
                  sx={{ 
                    marginBottom: 1,
                    backgroundColor: item.category === 'Education' ? '#12b5e5' :
                                   item.category === 'Research' ? '#0ba95b' :
                                   item.category === 'Achievement' ? '#fcba28' :
                                   item.category === 'Funding' ? '#7b5ea7' : '#f38ba3',
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

                {/* Achievements */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {item.achievements.map((achievement, idx) => (
                    <Chip
                      key={idx}
                      label={achievement}
                      size="small"
                      sx={{ 
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        backgroundColor: idx % 4 === 0 ? '#12b5e5' : 
                                       idx % 4 === 1 ? '#0ba95b' :
                                       idx % 4 === 2 ? '#fcba28' : '#f38ba3',
                        color: 'white',
                        border: '2px solid #231f20',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        boxShadow: '0 2px 6px rgba(35, 31, 32, 0.3)',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 3px 8px rgba(35, 31, 32, 0.4)'
                        },
                        transition: 'all 0.2s ease'
                      }}
                    />
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

export default Timeline;