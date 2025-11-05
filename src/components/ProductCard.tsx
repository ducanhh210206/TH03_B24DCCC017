import React from "react";
import { Product } from "./ProductContext";
import { useNavigate } from "react-router-dom";

interface Props {
  product: Product;
  onDelete: (id: number) => void;
}

const ProductCard: React.FC<Props> = ({ product, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card">
      <h3>{product.ten}</h3>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <button onClick={() => navigate(`/products/${product.id}`)}>
        Chi tiết
      </button>
      <button onClick={() => navigate(`/edit/${product.id}`)}>Sửa</button>
      <button onClick={() => onDelete(product.id)}>Xóa</button>
    </div>
  );
};

export default ProductCard;
export {};