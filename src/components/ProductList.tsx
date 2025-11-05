import React, { useContext, useState } from "react";
import ProductContext from "./ProductContext";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import Pagination from "./Pagination";

const ProductList: React.FC = () => {
  const { state, dispatch } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa sản phẩm này?")) {
      dispatch({ type: "DELETE", payload: id });
    }
  };

  const filteredProducts = state.products
    .filter((p) => p.ten.toLowerCase().includes(search.toLowerCase()))
    .filter((p) => (category ? p.danhMuc === category : true))
    .filter((p) => p.gia >= priceRange.min && p.gia <= priceRange.max);

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <Filter
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div className="product-list">
        {currentProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onDelete={handleDelete}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
      <p>Tổng số sản phẩm: {filteredProducts.length}</p>
      <p>
        Trang {currentPage} / {totalPages}
      </p>
    </div>
  );
};

export default ProductList;
export {};
