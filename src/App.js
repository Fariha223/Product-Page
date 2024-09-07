import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProductPage from "./productPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

