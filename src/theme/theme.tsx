import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#a855f7",
      dark: "#7c3aed",
      light: "#c084fc",
    },
    secondary: {
      main: "#ec4899",
    },
    background: {
      default: "#030617", // Dark background
      paper: "#0f172a", // Card background
    },
    text: {
      primary: "#ffffff",
      secondary: "#a99ae1", // Highlight text color
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "#0f172a", // Card background
          border: "1px solid rgba(169, 154, 225, 0.2)",
          borderRadius: "12px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "8px",
        },
        containedPrimary: {
          backgroundColor: "#a855f7",
          "&:hover": {
            backgroundColor: "#7c3aed",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#030617", // Sidebar background
          borderRight: "1px solid rgba(169, 154, 225, 0.2)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0a0f22", // Navbar background
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(169, 154, 225, 0.2)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#030617",
            borderRadius: "8px",
            "& fieldset": {
              borderColor: "rgba(169, 154, 225, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(169, 154, 225, 0.5)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#a855f7",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#030617",
          borderRadius: "8px",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          backgroundColor: "#030617",
          borderRadius: "8px",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(169, 154, 225, 0.1)",
          color: "#ffffff",
        },
        head: {
          backgroundColor: "#0a0f22",
          color: "#a99ae1",
          fontWeight: 600,
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
