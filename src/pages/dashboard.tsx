"use client";

import { useState, lazy } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SidebarNav } from "../components/sidebar/sidebar-nav";
import { Navbar } from "../components/navbar/navbar";
const DashboardPage = lazy(
  () => import("../components/sections/dashboard-page")
);

const AnalyticsPage = lazy(
  () => import("../components/sections/analytics-page")
);

const UsersPage = lazy(() => import("../components/sections/users-page"));
const OrdersPage = lazy(() => import("../components/sections/orders-page"));
const ProductsPage = lazy(() => import("../components/sections/products-page"));
const SettingsPage = lazy(() => import("../components/sections/settings-page"));
const NotificationsPage = lazy(
  () => import("../components/sections/notifications-page")
);

export default function Component() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const renderPage = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPage />;
      case "analytics":
        return <AnalyticsPage />;
      case "users":
        return <UsersPage />;
      case "orders":
        return <OrdersPage />;
      case "products":
        return <ProductsPage />;
      case "settings":
        return <SettingsPage />;
      case "notifications":
        return <NotificationsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <>
      <Box
        sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#030617" }}
      >
        <SidebarNav
          activeTab={activeTab}
          onTabChange={setActiveTab}
          open={sidebarOpen}
          onToggle={handleToggleSidebar}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            marginLeft: isMobile ? 0 : sidebarOpen ? 0 : 0,
            width: isMobile
              ? "100%"
              : sidebarOpen
              ? "calc(100% - 280px)"
              : "100%",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Navbar onToggleSidebar={handleToggleSidebar} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: { xs: 2, sm: 3 },
              width: "100%",
              maxWidth: "100%",
              overflow: "hidden",
            }}
          >
            {renderPage()}
          </Box>
        </Box>
      </Box>
    </>
  );
}
