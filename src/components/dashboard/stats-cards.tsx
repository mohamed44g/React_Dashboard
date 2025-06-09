import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import {
  Users,
  TrendingUp,
  FileText,
  BarChart3,
  ShoppingCart,
  CreditCard,
  Package,
  DollarSign,
} from "lucide-react";

const statsData = [
  {
    title: "Total Users",
    value: "12,543",
    change: "+12.5%",
    changeType: "positive",
    icon: Users,
    description: "Active users this month",
  },
  {
    title: "Revenue",
    value: "$145,231",
    change: "+8.2%",
    changeType: "positive",
    icon: DollarSign,
    description: "Total revenue this month",
  },
  {
    title: "Orders",
    value: "3,234",
    change: "+23.1%",
    changeType: "positive",
    icon: ShoppingCart,
    description: "Orders completed",
  },
  {
    title: "Growth Rate",
    value: "18.2%",
    change: "+4.3%",
    changeType: "positive",
    icon: TrendingUp,
    description: "Monthly growth",
  },
  {
    title: "Products",
    value: "1,847",
    change: "+5.7%",
    changeType: "positive",
    icon: Package,
    description: "Total products",
  },
  {
    title: "Transactions",
    value: "8,921",
    change: "-2.1%",
    changeType: "negative",
    icon: CreditCard,
    description: "This month",
  },
  {
    title: "Reports",
    value: "456",
    change: "+15.3%",
    changeType: "positive",
    icon: FileText,
    description: "Generated reports",
  },
  {
    title: "Conversion",
    value: "3.24%",
    change: "+0.8%",
    changeType: "positive",
    icon: BarChart3,
    description: "Conversion rate",
  },
];

export function StatsCards() {
  return (
    <Grid container spacing={3}>
      {statsData.map((stat, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
          <Card
            sx={{
              "&:hover": {
                borderColor: "rgba(169, 154, 225, 0.4)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.2s ease-in-out",
              height: "100%",
            }}
          >
            <CardContent sx={{ p: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: "#a99ae1", fontWeight: 500 }}
                >
                  {stat.title}
                </Typography>
                <stat.icon size={20} color="#a855f7" />
              </Box>
              <Typography
                variant="h4"
                sx={{ color: "white", fontWeight: "bold", mb: 1 }}
              >
                {stat.value}
              </Typography>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color:
                      stat.changeType === "positive" ? "#10b981" : "#ef4444",
                    fontWeight: 600,
                  }}
                >
                  {stat.change}
                </Typography>
                <Typography variant="caption" sx={{ color: "#64748b" }}>
                  from last month
                </Typography>
              </Box>
              <Typography variant="caption" sx={{ color: "#a99ae1" }}>
                {stat.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
