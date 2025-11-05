import React, { createContext, useReducer, ReactNode } from "react";

export interface Product {
  id: number;
  ten: string;
  danhMuc: string;
  gia: number;
  soLuong: number;
  moTa: string;
}

type State = {
  products: Product[];
};

type Action =
  | { type: "ADD"; payload: Product }
  | { type: "UPDATE"; payload: Product }
  | { type: "DELETE"; payload: number };

const initialProducts: Product[] = [
  {
    id: 1,
    ten: "iPhone 15 Pro",
    danhMuc: "Điện tử",
    gia: 25000000,
    soLuong: 10,
    moTa: "Điện thoại mới nhất",
  },
  {
    id: 2,
    ten: "Áo Thun Nam",
    danhMuc: "Quần áo",
    gia: 150000,
    soLuong: 50,
    moTa: "Áo cotton thoáng mát",
  },
  {
    id: 3,
    ten: "Bánh Mì",
    danhMuc: "Đồ ăn",
    gia: 20000,
    soLuong: 100,
    moTa: "Bánh mì nóng giòn",
  },
  {
    id: 4,
    ten: "Sách React",
    danhMuc: "Sách",
    gia: 120000,
    soLuong: 30,
    moTa: "Học React từ cơ bản đến nâng cao",
  },
  {
    id: 5,
    ten: "Laptop Dell",
    danhMuc: "Điện tử",
    gia: 18000000,
    soLuong: 5,
    moTa: "Laptop hiệu năng cao",
  },
  {
    id: 6,
    ten: "Quần Jean Nữ",
    danhMuc: "Quần áo",
    gia: 250000,
    soLuong: 20,
    moTa: "Jean nữ thời trang",
  },
  {
    id: 7,
    ten: "Snack",
    danhMuc: "Đồ ăn",
    gia: 50000,
    soLuong: 80,
    moTa: "Snack giòn tan",
  },
  {
    id: 8,
    ten: "Sách TypeScript",
    danhMuc: "Sách",
    gia: 150000,
    soLuong: 40,
    moTa: "Học TypeScript dễ dàng",
  },
  {
    id: 9,
    ten: "Tai nghe Bluetooth",
    danhMuc: "Điện tử",
    gia: 2000000,
    soLuong: 15,
    moTa: "Tai nghe không dây",
  },
  {
    id: 10,
    ten: "Áo Khoác Nam",
    danhMuc: "Quần áo",
    gia: 300000,
    soLuong: 25,
    moTa: "Áo khoác nam ấm áp",
  },
];

const initialState: State = { products: initialProducts };

const ProductContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const productReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD":
      return { ...state, products: [...state.products, action.payload] };
    case "UPDATE":
      return {
        ...state,
        products: state.products.map((p) =>
          p.id === action.payload.id ? action.payload : p
        ),
      };
    case "DELETE":
      return {
        ...state,
        products: state.products.filter((p) => p.id !== action.payload),
      };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
export {};