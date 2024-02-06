import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./ui/theme";
import Header from "./ui/layout/Header/Header";
import Main from "./ui/layout/Main/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Main/>
    </ThemeProvider>
  );
}

export default App;
