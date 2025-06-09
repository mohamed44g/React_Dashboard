import {
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Button,
  Chip,
  IconButton,
  Avatar,
} from "@mui/material";
import { Package, Plus, Edit, Trash2, Eye } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation",
    price: 199.99,
    stock: 45,
    category: "Electronics",
    status: "Active",
    image: "/placeholder.svg?height=80&width=80",
    sales: 234,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Fitness tracking smartwatch with heart rate monitor",
    price: 299.99,
    stock: 23,
    category: "Electronics",
    status: "Active",
    image: "/placeholder.svg?height=80&width=80",
    sales: 156,
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    description: "Comfortable 100% cotton t-shirt in various colors",
    price: 29.99,
    stock: 0,
    category: "Clothing",
    status: "Out of Stock",
    image: "/placeholder.svg?height=80&width=80",
    sales: 89,
  },
  {
    id: 4,
    name: "Coffee Maker",
    description: "Automatic drip coffee maker with programmable timer",
    price: 89.99,
    stock: 12,
    category: "Home",
    status: "Low Stock",
    image: "/placeholder.svg?height=80&width=80",
    sales: 67,
  },
];

export default function ProductsPage() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "#10b981";
      case "Out of Stock":
        return "#ef4444";
      case "Low Stock":
        return "#f59e0b";
      default:
        return "#6b7280";
    }
  };

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
            Products Management
          </Typography>
          <Typography variant="body1" sx={{ color: "#c084fc", mt: 1 }}>
            Manage your product inventory
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Plus size={16} />}
          sx={{
            backgroundColor: "#a855f7",
            "&:hover": { backgroundColor: "#7c3aed" },
          }}
        >
          Add Product
        </Button>
      </Box>

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card>
            <CardContent
              sx={{ display: "flex", alignItems: "center", gap: 2, p: 3 }}
            >
              <Package size={32} color="#a855f7" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {products.length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Total Products
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
              <Package size={32} color="#10b981" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {products.filter((p) => p.status === "Active").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Active Products
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
              <Package size={32} color="#f59e0b" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {products.filter((p) => p.status === "Low Stock").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Low Stock
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
              <Package size={32} color="#ef4444" />
              <Box>
                <Typography
                  variant="h4"
                  sx={{ color: "white", fontWeight: "bold" }}
                >
                  {products.filter((p) => p.status === "Out of Stock").length}
                </Typography>
                <Typography variant="body2" sx={{ color: "#c084fc" }}>
                  Out of Stock
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
              Product Inventory
            </Typography>
          }
          subheader={
            <Typography variant="body2" sx={{ color: "#c084fc" }}>
              All products in your store
            </Typography>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid size={12} key={product.id}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    p: 2,
                    backgroundColor: "#252540",
                    borderRadius: 2,
                  }}
                >
                  <Avatar
                    variant="rounded"
                    src={product.image}
                    sx={{ width: 64, height: 64, backgroundColor: "#333356" }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                      }}
                    >
                      <Box>
                        <Typography variant="h6" sx={{ color: "white" }}>
                          {product.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#c084fc", mt: 0.5 }}
                        >
                          {product.description}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 2,
                            mt: 1,
                          }}
                        >
                          <Typography
                            variant="body1"
                            sx={{ color: "white", fontWeight: "bold" }}
                          >
                            ${product.price}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#c084fc" }}>
                            Stock: {product.stock}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#c084fc" }}>
                            Sales: {product.sales}
                          </Typography>
                          <Chip
                            label={product.category}
                            size="small"
                            sx={{
                              backgroundColor: "#334155",
                              color: "#c084fc",
                            }}
                          />
                        </Box>
                      </Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <Chip
                          label={product.status}
                          size="small"
                          sx={{
                            backgroundColor: getStatusColor(product.status),
                            color: "white",
                          }}
                        />
                        <IconButton size="small" sx={{ color: "#c084fc" }}>
                          <Eye size={16} />
                        </IconButton>
                        <IconButton size="small" sx={{ color: "#c084fc" }}>
                          <Edit size={16} />
                        </IconButton>
                        <IconButton size="small" sx={{ color: "#ef4444" }}>
                          <Trash2 size={16} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
