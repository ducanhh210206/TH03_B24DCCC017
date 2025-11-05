import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import ProductContext from "../components/ProductContext";

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state } = useContext(ProductContext);

  const existingProduct = state.products.find((p) => p.id === Number(id));

  if (!existingProduct) return <p>Không tìm thấy sản phẩm</p>;

  return (
    <div>
      <h1>Chỉnh sửa sản phẩm</h1>
      <ProductForm existingProduct={existingProduct} />
    </div>
  );
};

export default EditProduct;