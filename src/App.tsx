import { ThemeProvider, CssBaseline, responsiveFontSizes } from "@mui/material";
import Dashboard from "./pages/dashboard";
import { theme } from "./theme/theme";

function App() {
  const App_theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={App_theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
