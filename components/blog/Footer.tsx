import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Content',
      links: [
        { label: 'Latest Articles', href: '#' },
        { label: 'React Tutorials', href: '#' },
        { label: 'TypeScript Guides', href: '#' },
        { label: 'Best Practices', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: '#' },
        { label: 'GitHub', href: '#' },
        { label: 'Twitter', href: '#' },
        { label: 'LinkedIn', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Examples', href: '#' },
        { label: 'Templates', href: '#' },
        { label: 'Tools', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Contact Us', href: '#' },
        { label: 'Bug Reports', href: '#' },
        { label: 'Feature Requests', href: '#' },
      ],
    },
  ];

  const socialIcons = [
    { label: 'GitHub', icon: '📱', href: '#' },
    { label: 'Twitter', icon: '🐦', href: '#' },
    { label: 'LinkedIn', icon: '💼', href: '#' },
    { label: 'Discord', icon: '💬', href: '#' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.grey[900],
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              component="div"
              sx={{ fontWeight: 'bold', mb: 2 }}
            >
              React Blog Hub
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.grey[400],
                mb: 3,
                lineHeight: 1.6,
              }}
            >
              Your premier destination for React tutorials, best practices, and cutting-edge development insights. Join our community of passionate developers.
            </Typography>
            
            {/* Social Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialIcons.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  sx={{
                    color: theme.palette.grey[400],
                    '&:hover': {
                      color: 'white',
                      bgcolor: theme.palette.primary.main,
                    },
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={social.label}
                >
                  <span style={{ fontSize: '1.2rem' }}>{social.icon}</span>
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <Grid item xs={6} sm={3} md={2} key={section.title}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: '1rem',
                }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.label} sx={{ mb: 1 }}>
                    <Link
                      href={link.href}
                      sx={{
                        color: theme.palette.grey[400],
                        textDecoration: 'none',
                        fontSize: '0.875rem',
                        '&:hover': {
                          color: 'white',
                          textDecoration: 'underline',
                        },
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, bgcolor: theme.palette.grey[700] }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: theme.palette.grey[400] }}
          >
            © {currentYear} React Blog Hub. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="#"
              sx={{
                color: theme.palette.grey[400],
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              sx={{
                color: theme.palette.grey[400],
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              sx={{
                color: theme.palette.grey[400],
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': {
                  color: 'white',
                  textDecoration: 'underline',
                },
              }}
            >
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
