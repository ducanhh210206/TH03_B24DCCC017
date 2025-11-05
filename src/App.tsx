import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductProvider } from "./components/ProductContext";

import Home from "./pages/Home";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import ProductDetail from "./pages/ProductDetail";

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <nav>
          <Link to="/">Trang Chủ</Link> | <Link to="/add">Thêm Sản Phẩm</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;