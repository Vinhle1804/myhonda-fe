"use client"; // Đảm bảo đây là dòng đầu tiên

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface IProduct {
  id: number;
  name: string;
  slug: string;
  versions?: {
    variants?: {
      images?: string[];
      price?: number;
    }[];
  }[];
}

const ProductList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Lỗi API: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Dữ liệu sản phẩm:", data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error("API không trả về mảng!");
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Đang tải...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h2>
      {products.length === 0 ? (
        <p>Không có sản phẩm nào</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <li key={product.id}>
              <Link
                href={`/test/${product.slug}`}
                className="block p-4 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>

                {product.versions?.[0]?.variants?.[0]?.images?.[0] && (
                  <Image
                    width={200}
                    height={200}
                    src={product.versions[0].variants[0].images[0]}
                    alt={product.name}
                    className="w-full h-64 object-cover rounded-md"
                  />
                )}

                {product.versions?.[0]?.variants?.[0]?.price !== undefined && (
                  <div className="price mt-2 text-lg">
                    Giá từ:{" "}
                    <span className="font-bold">
                      {product.versions[0].variants[0].price}
                    </span>{" "}
                    VNĐ
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
