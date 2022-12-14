import React from "react";
import {
  useTheme,
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createLocalStorageStateHook } from "use-local-storage-state";

const themeConfig = {
  // Light theme
  light: {
    palette: {
      type: "light",
      primary: {
        // Use hue from colors or hex
        main: "#00AFC7",
        // Uncomment to specify light/dark
        // shades instead of automatically
        // calculating from above value.
        light: "#02E0FF",
        dark: "#006371",
      },
      secondary: {
        main: "#FF7A00",
        light: "#FF800B",
        dark: "#B95900",
      },
      background: {
        // Background for <body>
        // and <Section color="default">
        default: "#ffffff",
        light: "#e6f7f9",
        // Background for elevated
        // components (<Card>, etc)
        paper: "#ffffff",
      },
    },
  },

  // Dark theme
  dark: {
    palette: {
      type: "dark",
      primary: {
        // Same as in light but we could
        // adjust color hue if needed
        main: "#00AFC7",
      },
      secondary: {
        main: "#FF7A00",
      },
      background: {
        default: "#001114",
        paper: "#004650",
      },
    },
  },

  // Values for both themes
  common: {
    typography: {
      fontSize: 14,
      fontFamily: '"Rubik", "Helvetica", "Arial", sans-serif',
      // Uncomment to make button lowercase
      // button: { textTransform: "none" },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1920,
      },
    },
    // Override component styles
    overrides: {
      // Global styles
      MuiCssBaseline: {
        "@global": {
          "#root": {
            // Flex column that is height
            // of viewport so that footer
            // can push self to bottom by
            // with auto margin-top
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            // Prevent child elements from
            // shrinking when content
            // is taller than the screen
            // (quirk of flex parent)
            "& > *": {
              flexShrink: 0,
            },
          },
        },
      },
    },
  },
};

function getTheme(name) {
  // Create MUI theme from themeConfig
  return createTheme({
    ...themeConfig[name],
    // Merge in common values
    ...themeConfig.common,
    overrides: {
      // Merge overrides
      ...(themeConfig[name] && themeConfig[name].overrides),
      ...(themeConfig.common && themeConfig.common.overrides),
    },
  });
}

// Create a local storage hook for dark mode preference
const useDarkModeStorage = createLocalStorageStateHook("isDarkMode");

export const ThemeProvider = (props) => {
  // Get system dark mode preference
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", {
    noSsr: true,
  });

  // Get stored dark mode preference
  let [isDarkModeStored, setIsDarkModeStored] = useDarkModeStorage();

  // Use stored dark mode with fallback to system preference
  const isDarkMode =
    isDarkModeStored === undefined ? prefersDarkMode : isDarkModeStored;

  // Get MUI theme object
  const themeName = isDarkMode ? "dark" : "light";
  const theme = getTheme(themeName);

  // Add toggle function to theme object
  theme.palette.toggle = () => setIsDarkModeStored((value) => !value);

  return (
    <MuiThemeProvider theme={theme}>
      {/* Set global MUI styles */}
      <CssBaseline />
      {props.children}
    </MuiThemeProvider>
  );
};

// Hook for detecting dark mode and toggling between light/dark
// More convenient than reading theme.palette.type from useTheme
export function useDarkMode() {
  // Get current Material UI theme
  const theme = useTheme();
  // Check if it's the dark theme
  const isDarkMode = theme.palette.type === "dark";
  // Return object containing dark mode value and toggle function
  return { value: isDarkMode, toggle: theme.palette.toggle };
}
