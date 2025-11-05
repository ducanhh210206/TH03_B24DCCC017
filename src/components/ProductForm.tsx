import React, { useState, useContext } from "react";
import ProductContext, { Product } from "./ProductContext";
import { useNavigate } from "react-router-dom";

interface Props {
  existingProduct?: Product;
}

const ProductForm: React.FC<Props> = ({ existingProduct }) => {
  const { state, dispatch } = useContext(ProductContext);
  const navigate = useNavigate();

  const [ten, setTen] = useState(existingProduct?.ten || "");
  const [danhMuc, setDanhMuc] = useState(existingProduct?.danhMuc || "");
  const [gia, setGia] = useState(existingProduct?.gia || 0);
  const [soLuong, setSoLuong] = useState(existingProduct?.soLuong || 0);
  const [moTa, setMoTa] = useState(existingProduct?.moTa || "");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!ten || ten.length < 3) newErrors.ten = "Tên sản phẩm ít nhất 3 ký tự";
    if (!danhMuc) newErrors.danhMuc = "Vui lòng chọn danh mục";
    if (gia <= 0) newErrors.gia = "Giá phải lớn hơn 0";
    if (soLuong <= 0 || !Number.isInteger(soLuong))
      newErrors.soLuong = "Số lượng phải là số nguyên dương";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const product: Product = {
      id: existingProduct
        ? existingProduct.id
        : state.products.length > 0
        ? Math.max(...state.products.map((p) => p.id)) + 1
        : 1,
      ten,
      danhMuc,
      gia,
      soLuong,
      moTa,
    };

    if (existingProduct) {
      dispatch({ type: "UPDATE", payload: product });
    } else {
      dispatch({ type: "ADD", payload: product });
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tên sản phẩm</label>
        <input value={ten} onChange={(e) => setTen(e.target.value)} />
        {errors.ten && <span style={{ color: "red" }}>{errors.ten}</span>}
      </div>

      <div>
        <label>Danh mục</label>
        <select value={danhMuc} onChange={(e) => setDanhMuc(e.target.value)}>
          <option value="">Chọn danh mục</option>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>
        {errors.danhMuc && (
          <span style={{ color: "red" }}>{errors.danhMuc}</span>
        )}
      </div>

      <div>
        <label>Giá</label>
        <input
          type="number"
          value={gia}
          onChange={(e) => setGia(Number(e.target.value))}
        />
        {errors.gia && <span style={{ color: "red" }}>{errors.gia}</span>}
      </div>

      <div>
        <label>Số lượng</label>
        <input
          type="number"
          value={soLuong}
          onChange={(e) => setSoLuong(Number(e.target.value))}
        />
        {errors.soLuong && (
          <span style={{ color: "red" }}>{errors.soLuong}</span>
        )}
      </div>

      <div>
        <label>Mô tả</label>
        <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)} />
      </div>

      <button type="submit">
        {existingProduct ? "Cập nhật" : "Thêm sản phẩm"}
      </button>
    </form>
  );
};

export default ProductForm;
export {};