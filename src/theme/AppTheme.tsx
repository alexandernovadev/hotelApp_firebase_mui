import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { purpleTheme } from "./purpleTheme";

interface props {
  children: JSX.Element | JSX.Element[];
}

export const AppTheme = ({ children }: props) => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
