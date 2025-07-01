import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Avatar,
  useTheme,
} from '@mui/material';

export default function AboutSection() {
  const theme = useTheme();

  const features = [
    {
      title: 'Expert Content',
      description: 'Learn from industry professionals with years of React experience.',
      emoji: '👨‍💻',
      color: theme.palette.primary.main,
    },
    {
      title: 'Latest Trends',
      description: 'Stay updated with the newest React features and best practices.',
      emoji: '🚀',
      color: theme.palette.secondary.main,
    },
    {
      title: 'Practical Examples',
      description: 'Every tutorial includes real-world examples and code snippets.',
      emoji: '💡',
      color: '#ff9800',
    },
    {
      title: 'Community Driven',
      description: 'Join a vibrant community of React developers sharing knowledge.',
      emoji: '👥',
      color: '#4caf50',
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 'bold',
              mb: 2,
              color: theme.palette.text.primary,
            }}
          >
            Why Choose React Blog Hub?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            We're passionate about sharing knowledge and helping developers grow their React skills through comprehensive tutorials and insights.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  height: '100%',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 60,
                    height: 60,
                    bgcolor: feature.color,
                    mb: 2,
                    mx: 'auto',
                    fontSize: '1.5rem',
                  }}
                >
                  {feature.emoji}
                </Avatar>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    fontWeight: 'bold',
                    mb: 1,
                    color: theme.palette.text.primary,
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6,
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
