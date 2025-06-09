import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  Chip,
  Avatar,
} from "@mui/material";
import {
  ShoppingCart,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react";

const orders = [
  {
    id: "ORD-001",
    customer: "John Doe",
    email: "john@example.com",
    total: 299.99,
    status: "Delivered",
    date: "2024-01-15",
    items: 3,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-002",
    customer: "Jane Smith",
    email: "jane@example.com",
    total: 159.99,
    status: "Shipped",
    date: "2024-01-14",
    items: 2,
    paymentMethod: "PayPal",
  },
  {
    id: "ORD-003",
    customer: "Bob Johnson",
    email: "bob@example.com",
    total: 89.99,
    status: "Processing",
    date: "2024-01-13",
    items: 1,
    paymentMethod: "Credit Card",
  },
  {
    id: "ORD-004",
    customer: "Alice Brown",
    email: "alice@example.com",
    total: 449.99,
    status: "Pending",
    date: "2024-01-12",
    items: 5,
    paymentMethod: "Bank Transfer",
  },
];

export default function OrdersPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "#10b981";
      case "Shipped":
        return "#3b82f6";
      case "Processing":
        return "#f59e0b";
      case "Pending":
        return "#f97316";
      case "Cancelled":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return CheckCircle;
      case "Shipped":
        return Truck;
      case "Processing":
        return Package;
      case "Pending":
        return Clock;
      default:
        return ShoppingCart;
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          Orders Management
        </Typography>
        <Typography variant="body1" sx={{ color: "#c084fc", mt: 1 }}>
          Track and manage customer orders
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <ShoppingCart size={32} color="#a855f7" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {orders.length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Total Orders
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <CheckCircle size={32} color="#10b981" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {orders.filter((o) => o.status === "Delivered").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Delivered
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <Truck size={32} color="#3b82f6" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {orders.filter((o) => o.status === "Shipped").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Shipped
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <Package size={32} color="#f59e0b" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {orders.filter((o) => o.status === "Processing").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Processing
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <Clock size={32} color="#f97316" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {orders.filter((o) => o.status === "Pending").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Pending
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Card>
        <CardHeader
          title={
            <Typography variant="h6" sx={{ color: "white" }}>
              Recent Orders
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{ color: "#c084fc" }}>
              Latest customer orders
            </Typography>
          }
        />
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {orders.map((order) => {
              const StatusIcon = getStatusIcon(order.status);
              return (
                <Box
                  key={order.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    p: 2,
                    backgroundColor: "#252540",
                    borderRadius: 2,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ bgcolor: "#a855f7" }}>
                      <StatusIcon size={20} />
                    </Avatar>
                    <Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ color: "white", fontWeight: "medium" }}
                        >
                          {order.id}
                        </Typography>
                        <Chip
                          label={order.status}
                          size="small"
                          sx={{
                            backgroundColor: getStatusColor(order.status),
                            color: "white",
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: "#c084fc" }}>
                        {order.customer} • {order.email}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#c084fc" }}>
                        {order.items} items • {order.paymentMethod}
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ textAlign: "right" }}>
                    <Typography
                      variant="body1"
                      sx={{ color: "white", fontWeight: "bold" }}
                    >
                      ${order.total}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#c084fc" }}>
                      {order.date}
                    </Typography>
                    <Button
                      startIcon={<Eye size={16} />}
                      variant="text"
                      size="small"
                      sx={{
                        color: "#c084fc",
                        mt: 0.5,
                        "&:hover": {
                          backgroundColor: "rgba(168, 85, 247, 0.1)",
                        },
                      }}
                    >
                      View
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
