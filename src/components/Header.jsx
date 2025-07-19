import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container
} from '@mui/material';

const Header = ({ onPageChange }) => {
  const navItems = [
    { label: 'Home', action: () => onPageChange('home') },
    { label: 'CV', href: '/assets/CV.pdf' },
    { label: 'Publications', href: 'https://ui.adsabs.harvard.edu/search/q=orcid%3A0000-0002-3947-6239&sort=date+desc' },
    { label: 'Resources', action: () => onPageChange('resources') },
    { label: 'Contact', action: () => onPageChange('contact') }
  ];

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#fcba28',
        backgroundSize: '40px 40px',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        zIndex: 1100
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
              fontWeight: 800,
              fontSize: '1.75rem',
              color: '#000000',
              letterSpacing: '-0.05em',
              textTransform: 'uppercase'
            }}
          >
            Portfolio
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 0 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                href={item.href}
                onClick={item.action}
                target={item.href && item.href.startsWith('http') ? '_blank' : '_self'}
                sx={{
                  color: '#000000',
                  textTransform: 'uppercase',
                  fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  letterSpacing: '0.1em',
                  px: 3,
                  py: 1.5,
                  borderRadius: 0,
                  minHeight: '48px',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    color: '#000000'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;