import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductContext from "../components/ProductContext";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useContext(ProductContext);
  const navigate = useNavigate();

  const product = state.products.find((p) => p.id === Number(id));
  if (!product) return <p>Không tìm thấy sản phẩm</p>;

  return (
    <div>
      <h1>{product.ten}</h1>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <p>Mô tả: {product.moTa}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};

export default ProductDetail;