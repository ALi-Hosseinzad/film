import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import FetchContents from './components/content/test2';

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <FetchContents />
    </ThemeProvider>
  );
}

export default App;
