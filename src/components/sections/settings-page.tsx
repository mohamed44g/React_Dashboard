import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  TextField,
  Switch,
  Divider,
} from "@mui/material";
import { Settings, User, Bell, Shield } from "lucide-react";

export function SettingsPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Box>
        <Typography variant="h3" sx={{ color: "white", fontWeight: "bold" }}>
          Settings
        </Typography>
        <Typography variant="body1" sx={{ color: "#c084fc", mt: 1 }}>
          Manage your system preferences and configuration
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Profile Settings */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <User size={20} />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Profile Settings
                  </Typography>
                </Box>
              }
              subheader={
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Update your personal information
                </Typography>
              }
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Full Name"
                defaultValue="John Doe"
                fullWidth
                sx={{
                  backgroundColor: "#252540",
                  color: "white",
                }}
              />
              <TextField
                label="Email"
                type="email"
                defaultValue="john@example.com"
                fullWidth
                sx={{
                  backgroundColor: "#252540",
                  color: "white",
                }}
              />
              <TextField
                label="Phone"
                defaultValue="+1 (555) 123-4567"
                fullWidth
                sx={{
                  backgroundColor: "#252540",
                  color: "white",
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                }}
              />
              <Divider sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }} />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#a855f7",
                  "&:hover": { backgroundColor: "#7c3aed" },
                  alignSelf: "flex-start",
                }}
              >
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Security Settings */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Shield size={20} />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Security Settings
                  </Typography>
                </Box>
              }
              subheader={
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Manage your account security
                </Typography>
              }
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Current Password"
                type="password"
                fullWidth
                sx={{
                  backgroundColor: "#252540",
                  color: "white",
                }}
              />
              <TextField
                label="New Password"
                type="password"
                fullWidth
                sx={{
                  backgroundColor: "#252540",
                  color: "white",
                }}
              />
              <TextField
                label="Confirm Password"
                type="password"
                fullWidth
                sx={{
                  backgroundColor: "#252540",
                  color: "white",
                }}
              />
              <Divider sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }} />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#a855f7",
                  "&:hover": { backgroundColor: "#7c3aed" },
                  alignSelf: "flex-start",
                }}
              >
                Update Password
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Notification Settings */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Bell size={20} />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Notification Settings
                  </Typography>
                </Box>
              }
              subheader={
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Configure your notification preferences
                </Typography>
              }
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Email Notifications
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#c084fc" }}>
                    Receive notifications via email
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Divider sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Push Notifications
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#c084fc" }}>
                    Receive push notifications
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Divider sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Order Updates
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#c084fc" }}>
                    Get notified about order status
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Divider sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Marketing Emails
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#c084fc" }}>
                    Receive promotional emails
                  </Typography>
                </Box>
                <Switch />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* System Settings */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardHeader
              title={
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Settings size={20} />
                  <Typography variant="h6" sx={{ color: "white" }}>
                    System Settings
                  </Typography>
                </Box>
              }
              subheader={
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Configure system preferences
                </Typography>
              }
            />
            <CardContent
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Dark Mode
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#c084fc" }}>
                    Use dark theme
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Divider sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Auto Backup
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#c084fc" }}>
                    Automatically backup data
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
              <Divider sx={{ backgroundColor: "rgba(168, 85, 247, 0.2)" }} />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="body1" sx={{ color: "white" }}>
                    Analytics
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#c084fc" }}>
                    Enable usage analytics
                  </Typography>
                </Box>
                <Switch defaultChecked />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
