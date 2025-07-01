import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Avatar,
  useTheme,
  TextField,
  InputAdornment,
} from '@mui/material';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  avatar: string;
}

export default function BlogList() {
  const theme = useTheme();
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with React 18 and Concurrent Features',
      excerpt: 'Learn about the latest features in React 18 including concurrent rendering, automatic batching, and Suspense improvements.',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      tags: ['React 18', 'Concurrent', 'Performance'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 2,
      title: 'TypeScript Best Practices for React Development',
      excerpt: 'Discover essential TypeScript patterns and techniques that will make your React applications more robust and maintainable.',
      author: 'Mike Chen',
      date: 'March 12, 2024',
      readTime: '12 min read',
      tags: ['TypeScript', 'Best Practices', 'React'],
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 3,
      title: 'Building Responsive UIs with Material-UI and CSS Grid',
      excerpt: 'Master the art of creating beautiful, responsive user interfaces using Material-UI components and modern CSS techniques.',
      author: 'Emma Rodriguez',
      date: 'March 10, 2024',
      readTime: '10 min read',
      tags: ['Material-UI', 'CSS Grid', 'Responsive'],
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 4,
      title: 'State Management Patterns: Redux vs Zustand vs Context',
      excerpt: 'Compare different state management solutions and learn when to use each approach in your React applications.',
      author: 'David Kim',
      date: 'March 8, 2024',
      readTime: '15 min read',
      tags: ['State Management', 'Redux', 'Zustand', 'Context'],
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 5,
      title: 'React Performance Optimization Techniques',
      excerpt: 'Learn advanced techniques to optimize your React applications for better performance and user experience.',
      author: 'Lisa Wang',
      date: 'March 5, 2024',
      readTime: '11 min read',
      tags: ['Performance', 'Optimization', 'React'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=40&h=40&fit=crop&crop=face',
    },
    {
      id: 6,
      title: 'Testing React Components with React Testing Library',
      excerpt: 'Comprehensive guide to testing React components effectively using React Testing Library and Jest.',
      author: 'Alex Thompson',
      date: 'March 3, 2024',
      readTime: '9 min read',
      tags: ['Testing', 'React Testing Library', 'Jest'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
    },
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
            Latest Articles
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
              mb: 4,
              lineHeight: 1.6,
            }}
          >
            Explore our collection of React tutorials, tips, and best practices from experienced developers.
          </Typography>
          
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search articles by title or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ maxWidth: 500, mx: 'auto' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  🔍
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container spacing={4}>
          {filteredPosts.map((post) => (
            <Grid item xs={12} sm={6} lg={4} key={post.id}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.shadows[8],
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    borderRadius: '12px 12px 0 0',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 'bold',
                      mb: 2,
                      lineHeight: 1.4,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      mb: 3,
                      lineHeight: 1.6,
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    {post.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{
                          mr: 1,
                          mb: 1,
                          bgcolor: theme.palette.primary.light,
                          color: 'white',
                          '&:hover': {
                            bgcolor: theme.palette.primary.main,
                          },
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar
                      src={post.avatar}
                      alt={post.author}
                      sx={{ width: 32, height: 32 }}
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                        {post.author}
                      </Typography>
                      <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        {post.date} • {post.readTime}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      textTransform: 'none',
                      fontWeight: 'medium',
                      borderRadius: 2,
                    }}
                  >
                    Read Article
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" sx={{ color: theme.palette.text.secondary }}>
              No articles found matching your search.
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
}
