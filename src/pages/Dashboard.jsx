import { Grid, Typography } from "@mui/material";
import KPIWidget from "../components/KPIWidget";
import TaskChart from "../components/TaskChart";
import ProductivityChart from "../components/ProductivityChart";

export default function Dashboard() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard Overview</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <KPIWidget title="Task Completion Rate" value="80%" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <KPIWidget title="Overdue Tasks" value="5" />
        </Grid>
        <Grid item xs={12} sm={4}>
          <KPIWidget title="Team Productivity" value="92%" />
        </Grid>
      </Grid>

      <TaskChart />
      <ProductivityChart />
    </div>
  );
}