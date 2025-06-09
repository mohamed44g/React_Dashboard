"use client";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  useTheme,
  IconButton,
} from "@mui/material";
import {
  BarChart3,
  Home,
  Users,
  Settings,
  ShoppingCart,
  Package,
  Bell,
  X,
} from "lucide-react";

const navigationItems = [
  {
    title: "Dashboard",
    icon: Home,
    url: "dashboard",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    url: "analytics",
  },
  {
    title: "Users",
    icon: Users,
    url: "users",
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    url: "orders",
  },
  {
    title: "Products",
    icon: Package,
    url: "products",
  },
];

const settingsItems = [
  {
    title: "Settings",
    icon: Settings,
    url: "settings",
  },
  {
    title: "Notifications",
    icon: Bell,
    url: "notifications",
  },
];

interface SidebarNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  open: boolean;
  onToggle: () => void;
}

export function SidebarNav({
  activeTab,
  onTabChange,
  open,
  onToggle,
}: SidebarNavProps) {
  const theme = useTheme();
  const isMobile = theme.breakpoints.down("sm");

  const handleItemClick = (url: string) => {
    onTabChange(url);
    if (isMobile) {
      onToggle(); // Close drawer on mobile when an item is clicked
    }
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: open ? { sm: 280 } : 0,
        "& .MuiDrawer-paper": {
          width: { xs: "70%", sm: 280 },
          backgroundColor: "#030617",
          borderRight: "1px solid rgba(169, 154, 225, 0.2)",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none", // Hide scrollbar for WebKit browsers (Chrome, Safari)
          },
          scrollbarWidth: "none", // Hide scrollbar for Firefox
          "-ms-overflow-style": "none", // Hide scrollbar for IE and Edge
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          borderBottom: "1px solid rgba(169, 154, 225, 0.2)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              backgroundColor: "#a855f7",
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BarChart3 size={24} color="white" />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: "white", fontWeight: 600 }}>
              Admin Panel
            </Typography>
            <Typography variant="body2" sx={{ color: "#a99ae1" }}>
              Management System
            </Typography>
          </Box>
        </Box>
        <IconButton
          onClick={onToggle}
          sx={{
            color: "#cbd5e1",
            display: { xs: "block", sm: "none" },
          }}
        >
          <X size={24} />
        </IconButton>
      </Box>

      <Box sx={{ p: 1, flexGrow: 1 }}>
        <Typography
          variant="overline"
          sx={{ color: "#a99ae1", px: 2, py: 1, fontSize: "0.75rem" }}
        >
          Main Navigation
        </Typography>
        <List>
          {navigationItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                selected={activeTab === item.url}
                onClick={() => handleItemClick(item.url)}
                sx={{
                  color: "#cbd5e1",
                  "&.Mui-selected": {
                    backgroundColor: "#a855f7",
                    color: "white",
                  },
                  borderRadius: 2,
                  mx: 1,
                  mb: 0.5,
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                  <item.icon size={20} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Typography
          variant="overline"
          sx={{ color: "#a99ae1", px: 2, py: 1, mt: 2, fontSize: "0.75rem" }}
        >
          System
        </Typography>
        <List>
          {settingsItems.map((item) => (
            <ListItem key={item.title} disablePadding>
              <ListItemButton
                selected={activeTab === item.url}
                onClick={() => handleItemClick(item.url)}
                sx={{
                  color: "#cbd5e1",
                  "&:hover": {
                    backgroundColor: "rgba(168, 85, 247, 0.2)",
                    color: "white",
                  },
                  "&.Mui-selected": {
                    backgroundColor: "#a855f7",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#7c3aed",
                    },
                  },
                  borderRadius: 2,
                  mx: 1,
                  mb: 0.5,
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
                  <item.icon size={20} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
