import { Card, CardContent, Typography } from "@mui/material";

export default function KPIWidget({ title, value }) {
  return (
    <Card sx={{ minWidth: 250, textAlign: "center" }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
}