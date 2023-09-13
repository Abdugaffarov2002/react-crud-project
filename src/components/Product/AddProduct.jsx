import React, { useContext, useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import { productContext } from "../../contexts/ProductContext";

const AddProduct = () => {
  const { addProduct } = useContext(productContext);

  const initProduct = {
    name: "",
    description: "",
    price: "",
    image: "",
    type: "",
  };

  const [product, setProduct] = useState(initProduct);

  function handleAddProduct(e) {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  }

  function saveProduct() {
    addProduct(product);
    setProduct(initProduct);
  }

  return (
    <Container>
      <h2
        style={{ margin: "30px 0", display: "flex", justifyContent: "center" }}
      >
        Add Product
      </h2>
      <div
        style={{
          display: "flex",
          margin: "50px auto",
          width: "40%",
          flexDirection: "column",
        }}
      >
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="name"
          value={product.name}
          onChange={handleAddProduct}
          placeholder="Name"
          label="Name"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="description"
          value={product.description}
          onChange={handleAddProduct}
          placeholder="Description"
          label="Description"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="price"
          value={product.price}
          onChange={handleAddProduct}
          placeholder="Price"
          label="Price"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="image"
          value={product.image}
          onChange={handleAddProduct}
          placeholder="Image"
          label="Image"
        />
        <TextField
          style={{ margin: "10px 0" }}
          type="text"
          name="type"
          value={product.type}
          onChange={handleAddProduct}
          placeholder="Type"
          label="Type"
        />
        <Button variant="contained" onClick={saveProduct}>
          Add New Product
        </Button>
      </div>
    </Container>
  );
};

export default AddProduct;
