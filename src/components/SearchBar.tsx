import React from "react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Tìm kiếm sản phẩm..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);

export default SearchBar;
export {};