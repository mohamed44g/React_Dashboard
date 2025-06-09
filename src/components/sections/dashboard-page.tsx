import { Box, Typography } from "@mui/material";
import { StatsCards } from "../dashboard/stats-cards";
import { ChartsSection } from "../dashboard/charts-section";

export function DashboardPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          Welcome to Dashboard
        </Typography>
        <Typography variant="body1" sx={{ color: "#c084fc", mt: 1 }}>
          Here's an overview of your system performance
        </Typography>
      </Box>

      <StatsCards />
      <ChartsSection />
    </Box>
  );
}
