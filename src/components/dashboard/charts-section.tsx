import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import { EnhancedLineChart, EnhancedPieChart } from "../charts/enhanced-charts";

export function ChartsSection() {
  const revenueData = [
    12000, 15000, 11000, 18000, 14000, 16000, 20000, 17000, 19000, 16500, 21000,
    23000,
  ];
  const revenueLabels = [
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

  const categoryData = [
    { label: "Electronics", value: 35, color: "#a855f7" },
    { label: "Clothing", value: 25, color: "#ec4899" },
    { label: "Books", value: 20, color: "#06b6d4" },
    { label: "Home", value: 20, color: "#10b981" },
  ];

  return (
    <Grid container spacing={3}>
      <Grid size={12}>
        <Card>
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
              Monthly Revenue
            </Typography>
            <Typography variant="body2" sx={{ color: "#a99ae1", mb: 3 }}>
              Revenue trend over the last 12 months
            </Typography>
            <EnhancedLineChart
              data={revenueData}
              title="Revenue Performance 2024"
              labels={revenueLabels}
              yAxisLabel="$"
            />
            <Grid container spacing={2} sx={{ mt: 3 }}>
              {[
                { label: "Total Revenue", value: "$195K" },
                { label: "This Month", value: "$23K" },
                { label: "Growth", value: "+9.5%" },
                { label: "Average", value: "$16.3K" },
              ].map((stat, index) => (
                <Grid size={{ xs: 6, sm: 3 }} key={index}>
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 2,
                      backgroundColor: "#030617",
                      borderRadius: 2,
                      border: "1px solid rgba(169, 154, 225, 0.1)",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#a99ae1" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
              Sales by Category
            </Typography>
            <Typography variant="body2" sx={{ color: "#a99ae1", mb: 3 }}>
              Product category distribution
            </Typography>
            <EnhancedPieChart data={categoryData} title="Category Breakdown" />
          </CardContent>
        </Card>
      </Grid>

      <Grid size={{ xs: 12, lg: 6 }}>
        <Card sx={{ height: "100%" }}>
          <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
            <Typography variant="h6" sx={{ color: "white", mb: 1 }}>
              Recent Activity
            </Typography>
            <Typography variant="body2" sx={{ color: "#a99ae1", mb: 3 }}>
              Latest system activities
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { action: "New user registered", time: "2 minutes ago" },
                { action: "Order #1234 completed", time: "5 minutes ago" },
                { action: "Payment received", time: "10 minutes ago" },
                { action: "Product updated", time: "15 minutes ago" },
                { action: "Report generated", time: "20 minutes ago" },
                { action: "System backup completed", time: "1 hour ago" },
              ].map((activity, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    p: 2,
                    backgroundColor: "#030617",
                    borderRadius: 2,
                    border: "1px solid rgba(169, 154, 225, 0.1)",
                  }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#a855f7",
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ color: "white" }}>
                      {activity.action}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#a99ae1" }}>
                      {activity.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
