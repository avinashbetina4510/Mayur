import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleTheme={() => setDarkMode(!darkMode)} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;