import React, { useState } from "react";

interface Props {
  category: string;
  setCategory: (value: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: (value: { min: number; max: number }) => void;
}

const Filter: React.FC<Props> = ({
  category,
  setCategory,
  priceRange,
  setPriceRange,
}) => {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");

  const handlePriceFilter = () => {
    setPriceRange({ min: Number(min) || 0, max: Number(max) || Infinity });
  };

  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Tất cả danh mục</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>
      <input
        type="number"
        placeholder="Giá min"
        value={min}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá max"
        value={max}
        onChange={(e) => setMax(e.target.value)}
      />
      <button onClick={handlePriceFilter}>Lọc giá</button>
    </div>
  );
};

export default Filter;
export {}; 