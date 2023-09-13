import React, { useContext, useEffect } from "react";
import { productContext } from "../contexts/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

const ProductDetails = () => {
  const { getOneProduct, oneProduct, deleteProduct } =
    useContext(productContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  console.log(oneProduct, "oneproduct");
  return (
    <div>
      <h2 style={{ textAlign: "center", margin: "25px" }}>Product Details</h2>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        {oneProduct ? (
          <Card sx={{ width: "745px", marginBottom: "25px" }}>
            <CardMedia
              component="img"
              sx={{ height: "450px", objectFit: "contain" }}
              image={oneProduct.image}
              title={oneProduct.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {oneProduct.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${oneProduct.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {oneProduct.type}
              </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button size="small" variant="contained">
                Edit
              </Button>
              <Button
                size="small"
                variant="contained"
                color="error"
                onClick={() => {
                  deleteProduct(oneProduct.id);
                  navigate(-1);
                }}
              >
                Delete
              </Button>
              <Button
                onClick={() => navigate(-1)}
                variant="contained"
                size="small"
                color="secondary"
              >
                Go Back
              </Button>
            </CardActions>
          </Card>
        ) : null}
      </Container>
    </div>
  );
};

export default ProductDetails;
