import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductContext from "./contexts/ProductContext";
import AddProduct from "./components/Product/AddProduct";
import ProductPage from "./pages/ProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import EditProductPage from "./pages/EditProductPage";

const MyRoutes = () => {
  return (
    <div>
      <ProductContext>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/detail/:id" element={<ProductDetailsPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </ProductContext>
    </div>
  );
};

export default MyRoutes;
