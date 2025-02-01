import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <Drawer variant="permanent" sx={{ width: 240 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
      </List>
    </Drawer>
  );
}