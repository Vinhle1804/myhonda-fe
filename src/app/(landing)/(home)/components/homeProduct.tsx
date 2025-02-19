"use client";
import React, { useEffect, useState } from "react";
import BasicTextFields from "@/components/textField";
import { FaFilter } from "react-icons/fa";
import Products from "../../products/_components/products";
import { PRODUCTS, ProductType } from "@/data/products";

function HomeProducts() {
  const [filters, setFilters] = useState<{
    type: string | null;
  }>({
    type: null,
  });
  const [products, setProducts] = useState(PRODUCTS);

  useEffect(() => {
    if (!filters.type) {
      setProducts(PRODUCTS);
      return;
    }
    const filterProducts = PRODUCTS.filter(
      (product) => product.type === filters.type
    );
    console.log(filters.type)
    setProducts(filterProducts);
  }, [filters.type]);

  return (
    <div className="p-10">
      {/* Danh mục sản phẩm */}
      <div className="divide-y-2 divide-red-500">
        <ul className="flex justify-start gap-5 p-2 cursor-pointer">
          <li
            className={`block py-2 ${
              filters.type === null
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() =>
              setFilters({
                type: null,
              })
            }
          >
            Tất cả
          </li>
          <li
            className={`block py-2 ${
              filters.type === ProductType.xeGa
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() =>
              setFilters({
                type: ProductType.xeGa,
              })
            }
          >
            Xe tay ga
          </li>
          <li
            className={`block py-2 ${
              filters.type === ProductType.xeSo
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() =>
              setFilters({
                type: ProductType.xeSo,
              })
            }
          >
            Xe số
          </li>
          <li
            className={`block py-2 ${
              filters.type === ProductType.xeConTay
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() =>
              setFilters({
                type: ProductType.xeConTay,
              })
            }
          >
            Xe côn tay
          </li>
          <li
            className={`block py-2 ${
              filters.type === ProductType.xePkl
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() =>
              setFilters({
                type: ProductType.xePkl,
              })
            }
          >
            Xe phân khối lớn
          </li>
          <li
            className={`block py-2 ${
              filters.type === ProductType.xeDien
                ? "text-red-500 border-b-2 border-red-500"
                : ""
            }`}
            onClick={() =>
              setFilters({
                type: ProductType.xeDien,
              })
            }
          >
            Xe điện
          </li>
        </ul>
      </div>

      {/* Filter */}
      <div className="my-5 flex justify-between items-center space-x-4">
        {/* Filter Section */}
        <div className="flex items-center space-x-3">
          <BasicTextFields
            label="Nhập tên loại xe:"
            value=""
            onChange={() => {
              console.log("Change");
            }}
            name="TEXT"
            sx={{
              "& > :not(style)": { m: 0, width: "300px" },
            }}
          />
          <FaFilter className="text-gray-500 border-2 border-red-500 rounded-full p-0 text-5xl" />

          <span className="text-xl text-gray-600">
            Kết quả: <br /> <p className="font-bold text-xl">... sản phẩm</p>
          </span>
        </div>

        {/* Button Section */}
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Bảng giá sp
          </button>
          <button className="px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400 transition-colors">
            So sánh sp
          </button>
        </div>
      </div>

      {/* Products */}
      <div>
        <h2 className="text-xl font-medium">
          <Products data={products} />
        </h2>
      </div>
    </div>
  );
}

export default HomeProducts;