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
  IconButton,
} from "@mui/material";
import {
  Bell,
  Check,
  X,
  User,
  ShoppingCart,
  AlertTriangle,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "New Order Received",
    message: "Order #ORD-001 has been placed by John Doe",
    type: "order",
    time: "2 minutes ago",
    read: false,
    icon: ShoppingCart,
  },
  {
    id: 2,
    title: "User Registration",
    message: "New user Jane Smith has registered",
    type: "user",
    time: "5 minutes ago",
    read: false,
    icon: User,
  },
  {
    id: 3,
    title: "Low Stock Alert",
    message: "Cotton T-Shirt is running low on stock (2 items left)",
    type: "warning",
    time: "10 minutes ago",
    read: false,
    icon: AlertTriangle,
  },
  {
    id: 4,
    title: "Payment Received",
    message: "Payment of $299.99 received for Order #ORD-002",
    type: "success",
    time: "15 minutes ago",
    read: true,
    icon: Check,
  },
];

export default function NotificationsPage() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case "order":
        return "#3b82f6";
      case "user":
        return "#10b981";
      case "warning":
        return "#f59e0b";
      case "success":
        return "#10b981";
      case "info":
        return "#a855f7";
      default:
        return "#6b7280";
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
            Notifications
          </Typography>
          <Typography variant="body1" sx={{ color: "#c084fc", mt: 1 }}>
            Stay updated with system activities
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            sx={{
              borderColor: "#a855f7",
              color: "#c084fc",
              "&:hover": {
                borderColor: "#7c3aed",
                backgroundColor: "rgba(168, 85, 247, 0.1)",
              },
            }}
          >
            Mark All as Read
          </Button>
          <Button
            variant="contained"
            startIcon={<Bell size={16} />}
            sx={{
              backgroundColor: "#a855f7",
              "&:hover": { backgroundColor: "#7c3aed" },
            }}
          >
            Settings
          </Button>
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <Bell size={32} color="#a855f7" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {notifications.length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Total Notifications
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <Bell size={32} color="#ef4444" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {unreadCount}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Unread
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <ShoppingCart size={32} color="#3b82f6" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {notifications.filter((n) => n.type === "order").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Order Alerts
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <AlertTriangle size={32} color="#f59e0b" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {notifications.filter((n) => n.type === "warning").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Warnings
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
              Recent Notifications
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{ color: "#c084fc" }}>
              Latest system notifications and alerts
            </Typography>
          }
        />
        <CardContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {notifications.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <Box
                  key={notification.id}
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 2,
                    p: 2,
                    backgroundColor: "#252540",
                    borderRadius: 2,
                    ...(notification.read
                      ? {}
                      : {
                          borderLeft: `4px solid #a855f7`,
                        }),
                  }}
                >
                  <Avatar sx={{ bgcolor: getTypeColor(notification.type) }}>
                    <IconComponent size={20} />
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Box>
                        <Typography
                          variant="body1"
                          sx={{
                            color: notification.read ? "#c084fc" : "white",
                            fontWeight: "medium",
                          }}
                        >
                          {notification.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#c084fc", mt: 0.5 }}
                        >
                          {notification.message}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{ color: "#a1a1c5", mt: 1, display: "block" }}
                        >
                          {notification.time}
                        </Typography>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        {!notification.read && (
                          <Chip
                            label="New"
                            size="small"
                            sx={{ bgcolor: "#a855f7" }}
                          />
                        )}
                        <Box sx={{ display: "flex" }}>
                          <IconButton size="small" sx={{ color: "#c084fc" }}>
                            <Check size={16} />
                          </IconButton>
                          <IconButton size="small" sx={{ color: "#ef4444" }}>
                            <X size={16} />
                          </IconButton>
                        </Box>
                      </Box>
                    </Box>
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
