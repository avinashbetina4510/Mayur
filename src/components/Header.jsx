import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function Header({ toggleTheme }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Task Tracker Dashboard
        </Typography>
        <IconButton onClick={toggleTheme} color="inherit">
          {document.body.classList.contains("dark") ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}