"use client";

import { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { SidebarNav } from "../components/sidebar/sidebar-nav";
import { Navbar } from "../components/navbar/navbar";
import { DashboardPage } from "../components/sections/dashboard-page";
import { AnalyticsPage } from "../components/sections/analytics-page";
import { UsersPage } from "../components/sections/users-page";
import { OrdersPage } from "../components/sections/orders-page";
import { ProductsPage } from "../components/sections/products-page";
import { SettingsPage } from "../components/sections/settings-page";
import { NotificationsPage } from "../components/sections/notifications-page";

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
