import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  Avatar,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import {
  Users,
  UserPlus,
  UserCheck,
  UserX,
  Edit,
  MoreHorizontal,
} from "lucide-react";

export function UsersPage() {
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      status: "Active",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      status: "Active",
      role: "User",
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      status: "Inactive",
      role: "User",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      status: "Active",
      role: "Moderator",
    },
  ];

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
            Users Management
          </Typography>
          <Typography variant="body1" sx={{ color: "#c084fc", mt: 1 }}>
            Manage system users and permissions
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          startIcon={<UserPlus size={16} />}
          sx={{
            backgroundColor: "#a855f7",
            "&:hover": { backgroundColor: "#7c3aed" },
          }}
        >
          Add User
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <Users size={32} color="#a855f7" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  1,234
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Total Users
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <UserCheck size={32} color="#10b981" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  1,156
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Active Users
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <UserX size={32} color="#ef4444" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  78
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Inactive Users
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
              User List
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{ color: "#c084fc" }}>
              All registered users
            </Typography>
          }
        />
        <CardContent>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Avatar sx={{ bgcolor: "#a855f7" }}>
                          {user.name.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" sx={{ color: "white" }}>
                          {user.name}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: "#c084fc" }}>
                        {user.email}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ color: "#c084fc" }}>
                        {user.role}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={user.status}
                        size="small"
                        sx={{
                          backgroundColor:
                            user.status === "Active" ? "#10b981" : "#ef4444",
                          color: "white",
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">
                      <IconButton size="small" sx={{ color: "#c084fc" }}>
                        <Edit size={16} />
                      </IconButton>
                      <IconButton size="small" sx={{ color: "#c084fc" }}>
                        <MoreHorizontal size={16} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
    </Box>
  );
}
