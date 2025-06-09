import { ThemeProvider, CssBaseline} from "@mui/material";
import Dashboard from "./pages/dashboard";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
