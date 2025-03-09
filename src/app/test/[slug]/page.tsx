"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";

interface IProductVariant {
  id: number | string;
  color: string;
  images: string[];
  price: number;
}

interface IProductVersion {
  title: string;
  variants: IProductVariant[];
}

interface IProduct {
  id: number;
  name: string;
  slug: string;
  versions?: IProductVersion[];
}

const ProductDetail = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [selectedVersion, setSelectedVersion] = useState<IProductVersion | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<IProductVariant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    fetch(`http://localhost:5000/products?slug=${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Lỗi API: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]);
          if (data[0].versions?.length > 0) {
            setSelectedVersion(data[0].versions[0]);
            if (data[0].versions[0].variants?.length > 0) {
              setSelectedVariant(data[0].versions[0].variants[0]);
            }
          }
        } else {
          console.error("Sản phẩm không tồn tại!");
        }
      })
      .catch((error) => console.error("Lỗi khi lấy dữ liệu:", error))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p>Đang tải...</p>;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Không tìm thấy sản phẩm</h1>
          <p className="mt-2 text-gray-600">Sản phẩm với mã {slug} không tồn tại</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-start w-[230px]">
        <select
          className="w-[230px] bg-white text-start border border-gray-300 rounded h-12 px-2 text-gray-700 cursor-pointer shadow-sm"
          value={selectedVersion?.title || ""}
          onChange={(event) => {
            const selected = product.versions?.find(
              (version) => version.title === event.target.value
            );
            if (selected) {
              setSelectedVersion(selected);
              setSelectedVariant(selected.variants?.[0] || null);
            }
          }}
        >
          {product.versions?.map((version) => (
            <option value={version.title} key={version.title}>
              {version.title}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-3xl font-bold">{product.name}</h1>

      {selectedVariant?.images?.[0] && (
        <Image
          width={400}
          height={400}
          src={selectedVariant.images[0]}
          alt={product.name}
          className="w-full max-w-md object-cover rounded-md my-4"
        />
      )}

      {selectedVariant?.price !== undefined && (
        <p className="text-xl font-semibold text-red-500">Giá: {selectedVariant.price} VNĐ</p>
      )}
    </div>
  );
};

export default ProductDetail;
