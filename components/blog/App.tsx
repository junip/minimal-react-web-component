import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './Header';
import HeroSection from './HeroSection';
import BlogList from './BlogList';
import Footer from './Footer';
import AboutSection from './AboutSection';
import { Container } from '@mui/material';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

interface AppProps {
  appName?: string;
}

export default function App({ appName = "React Blog Hub" }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header appName={appName} />
          <main style={{ flex: 1 }}>
            <HeroSection />
            <Container maxWidth="lg" sx={{ py: 4 }}>
              <AboutSection />
              <BlogList />
            </Container>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
