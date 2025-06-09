import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
} from "@mui/material";
import { BarChart3 } from "lucide-react";
import { EnhancedLineChart } from "../charts/enhanced-charts";

export function AnalyticsPage() {
  const trafficData = [
    1200, 1900, 3000, 5000, 2000, 3000, 4500, 3200, 4100, 3800, 5200, 6100,
  ];
  const trafficLabels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          Analytics
        </Typography>
        <Typography variant="body1" sx={{ color: "#c084fc", mt: 1 }}>
          Detailed analytics and insights
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid size={12}>
          <Card>
            <CardHeader
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <BarChart3 size={20} />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Traffic Analytics
                  </Typography>
                </Box>
              }
              subheader={
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Website traffic overview for 2024
                </Typography>
              }
            />
            <CardContent>
              <EnhancedLineChart
                data={trafficData}
                title="Monthly Website Visitors"
                labels={trafficLabels}
                yAxisLabel="visitors"
              />
              <Grid container spacing={2} sx={{ mt: 3 }}>
                {[
                  { label: "Total Visitors", value: "42.5K" },
                  { label: "This Month", value: "6.1K" },
                  { label: "Growth Rate", value: "+17.2%" },
                  { label: "Avg. Session", value: "3.4" },
                ].map((stat, index) => (
                  <Grid size={{ xs: 6, md: 3 }} key={index}>
                    <Box
                      sx={{
                        textAlign: "center",
                        p: 2,
                        backgroundColor: "#252540",
                        borderRadius: 2,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{ color: "white", fontWeight: "bold" }}
                      >
                        {stat.value}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#c084fc" }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
