"use client";

import type React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  TextField,
  InputAdornment,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Box,
  Badge,
  Divider,
} from "@mui/material";
import { Bell, Search, User, MenuIcon } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0a0f22",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(169, 154, 225, 0.2)",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          gap: 2,
          px: { xs: 2, sm: 3 },
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <IconButton
            onClick={onToggleSidebar}
            sx={{
              color: "#a99ae1",
              "&:hover": {
                backgroundColor: "rgba(169, 154, 225, 0.2)",
                color: "white",
              },
            }}
          >
            <MenuIcon size={20} />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexGrow: 1,
            maxWidth: { xs: "100%", sm: 400 },
          }}
        >
          <TextField
            placeholder="Search..."
            size="small"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search size={16} color="#a99ae1" />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: "#030617",
                border: "1px solid rgba(169, 154, 225, 0.3)",
                color: "white",
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  border: "none",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #a855f7",
                },
                "& input::placeholder": {
                  color: "#a99ae1",
                },
              },
            }}
          />

          <IconButton
            sx={{
              color: "#a99ae1",
              "&:hover": {
                backgroundColor: "rgba(169, 154, 225, 0.2)",
                color: "white",
              },
            }}
          >
            <Badge badgeContent={3} color="error">
              <Bell size={20} />
            </Badge>
          </IconButton>

          <IconButton onClick={handleMenuOpen}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "#a855f7",
                border: "2px solid #a855f7",
              }}
            >
              <User size={16} />
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                backgroundColor: "#0f172a",
                border: "1px solid rgba(169, 154, 225, 0.2)",
                minWidth: 200,
              },
            }}
          >
            <Box sx={{ p: 2 }}>
              <Typography
                variant="body2"
                sx={{ color: "white", fontWeight: 500 }}
              >
                John Doe
              </Typography>
              <Typography variant="caption" sx={{ color: "#a99ae1" }}>
                john@example.com
              </Typography>
            </Box>
            <Divider sx={{ backgroundColor: "rgba(169, 154, 225, 0.2)" }} />
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "#cbd5e1",
                "&:hover": {
                  backgroundColor: "rgba(169, 154, 225, 0.2)",
                  color: "white",
                },
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "#cbd5e1",
                "&:hover": {
                  backgroundColor: "rgba(169, 154, 225, 0.2)",
                  color: "white",
                },
              }}
            >
              Settings
            </MenuItem>
            <Divider sx={{ backgroundColor: "rgba(169, 154, 225, 0.2)" }} />
            <MenuItem
              onClick={handleMenuClose}
              sx={{
                color: "#cbd5e1",
                "&:hover": {
                  backgroundColor: "rgba(169, 154, 225, 0.2)",
                  color: "white",
                },
              }}
            >
              Log out
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
