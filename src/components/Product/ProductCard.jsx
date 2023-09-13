import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import { type } from "@testing-library/user-event/dist/type";

const ProductCard = () => {
  const { getProducts, products, deleteProduct } = useContext(productContext);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("q") || "");
  useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div style={{ margin: "20px" }}>
      <Container style={{ display: "flex", justifyContent: "space-around" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "25px",
            fontFamily: "cursive",
            color: "violet",
            border: "1px sollid violet ",
          }}
        >
          Product Card
        </h1>

        <TextField
          style={{
            width: "500px",
            margin: "25px",
          }}
          variant="outlined"
          type="text"
          placeholder="Search"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          size="small"
          style={{ margin: "25px", fontFamily: "cursive", fontSize: "18px" }}
          color="secondary"
          variant="outlined"
          onClick={() => navigate("/add")}
        >
          Add New Product
        </Button>
      </Container>

      <Grid container spacing={2} justifyContent="center">
        {products.map((item, index) => (
          <Grid item xs={8} md={6} lg={4}>
            <Card sx={{ maxWidth: 450, marginBottom: "25px" }} key={index}>
              <CardMedia
                sx={{ height: 300, objectFit: "contain" }}
                image={item.image}
                title={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.type}
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`detail/${item.id}`} style={{ marginRight: "10px" }}>
                  <Button size="small" variant="contained" color="secondary">
                    Detaails
                  </Button>
                </Link>
                <Link to={`edit/${item.id}`} style={{ marginRight: "10px" }}>
                  <Button size="small" variant="contained">
                    Edit
                  </Button>
                </Link>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  onClick={() => deleteProduct(item.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductCard;
