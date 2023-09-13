import React, { useContext, useEffect, useState } from "react";
import { productContext } from "../../contexts/ProductContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, TextField } from "@mui/material";

const EditProduct = () => {
  const { saveEditedProduct, getOneProduct, oneProduct } =
    useContext(productContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const [productToEdit, setProductToEdit] = useState(oneProduct);

  useEffect(() => {
    getOneProduct(id);
    setProductToEdit(oneProduct);
  }, []);

  useEffect(() => {
    setProductToEdit(oneProduct);
  }, [oneProduct]);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...productToEdit,
        [e.target.name]: Number(e.target.value),
      };
      setProductToEdit(obj);
    } else {
      let obj = {
        ...productToEdit,
        [e.target.name]: e.target.value,
      };
      setProductToEdit(obj);
    }
  };
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Edit Product</h1>

      {productToEdit ? (
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
            value={productToEdit.name}
            onChange={handleInp}
            placeholder="Name"
            label="Name"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="description"
            value={productToEdit.description}
            onChange={handleInp}
            placeholder="Description"
            label="Description"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="price"
            value={productToEdit.price}
            onChange={handleInp}
            placeholder="Price"
            label="Price"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="image"
            value={productToEdit.image}
            onChange={handleInp}
            placeholder="Image"
            label="Image"
          />
          <TextField
            style={{ margin: "10px 0" }}
            type="text"
            name="type"
            value={productToEdit.type}
            onChange={handleInp}
            placeholder="Type"
            label="Type"
          />
          <Button
            variant="contained"
            onClick={() => {
              saveEditedProduct(productToEdit);
              navigate("/");
            }}
          >
            Save Edit Product
          </Button>
        </div>
      ) : null}
    </Container>
  );
};

export default EditProduct;
