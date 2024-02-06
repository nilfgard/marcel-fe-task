import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './ui/theme';
import Home from './views/Home/Home';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
