"use client";

import React, { useState } from "react";
import { IProductVersion, PRODUCTS } from "../../../../../data/products";
import Image from "next/image";
import { Color } from "@/constants/color";

function MainDetailPage({ slug }: { slug: string }) {
  const product = PRODUCTS.find((product) => product.slug === slug);
  const [selectedVersion, setSelectedVersion] = useState<{
    title: string;
    data: IProductVersion;
  }>({
    title: product?.versions[0]?.title ?? "",
    data: product?.versions[0] ?? ({} as IProductVersion),
  });

  const [versionOfColor, setVersionOfColor] = useState<{
    id: string | number;
    color: string;
    images: string[];
    buttonStyle?: string;
    price: number | string;
    description?: string;
    dongCo?: string;
  }>(
    product?.versions[0]?.variants[0] ?? {
      id: "",
      color: "",
      images: [],
      price: "",
    }
  );
  // State save color data

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getColorClass = (color: string) => {
    if (!color || !(color in Color)) {
      return Color.default;
    }
    return Color[color as keyof typeof Color];
  };
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Không tìm thấy sản phẩm
          </h1>
          <p className="mt-2 text-gray-600">
            Sản phẩm với mã {slug} không tồn tại
          </p>
        </div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">
            Không tìm thấy sản phẩm
          </h1>
          <p className="mt-2 text-gray-600">
            Sản phẩm với mã {slug} không tồn tại
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        <div
          id="menu"
          className="space-y-4 h-16 w-full flex bg-white items-center "
        >
          <div className="flex justify-start w-[230px]">
            <select
              className="w-[230px] bg-white text-start border border-gray-300 rounded h-12 px-2 text-gray-700 cursor-pointer shadow-sm"
              value={selectedVersion.title}
              onChange={(event) => {
                const getVerisonData = product.versions.filter(
                  (version) => version.title === event.target.value
                )[0];
                setSelectedVersion({
                  title: event.target.value,
                  data: getVerisonData,
                });
                setVersionOfColor(getVerisonData.variants[0]);
              }}
            >
              {product.versions.map((version) => (
                <option value={version.title} key={version.title}>
                  {version.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex space-x-4 w-full justify-end">
            <a
              onClick={() => scrollToElement("gia")}
              className="text-black hover:underline active"
            >
              Giá &amp; Màu sắc
            </a>
            <a
              onClick={() => scrollToElement("thiet-ke")}
              className="text-black hover:underline"
            >
              Thiết kế
            </a>
            <a
              onClick={() => scrollToElement("dong-co")}
              className="text-black hover:underline"
            >
              Động cơ
            </a>
            <a
              onClick={() => scrollToElement("cong-nghe")}
              className="text-black hover:underline"
            >
              Công nghệ
            </a>
            <a
              onClick={() => scrollToElement("tien-ich")}
              className="text-black hover:underline"
            >
              Tiện ích &amp; An toàn
            </a>
            <a
              onClick={() => scrollToElement("thu-vien-anh")}
              className="text-black hover:underline"
            >
              Thư viện ảnh
            </a>
            <a
              onClick={() => scrollToElement("lich-su-doi-xe")}
              className="text-black hover:underline"
            >
              Lịch sử đời xe
            </a>
          </div>
        </div>

        <div
          id="gia"
          className="flex justify-between p-5 w-full bg-gradient-to-r from-slate-300 to-gray-500"
        >
          <div className="w-1/3 p-10 items-center">
            <p className="uppercase font-bold">Giá & Màu sắc</p>
            <div className="flex items-center justify-start gap-3">
              {selectedVersion.data.variants.map((variant) => {
                return (
                  <div className="flex flex-col" key={variant.id}>
                    <button
                      onClick={() => {
                        console.log(variant.color);
                        console.log(getColorClass(variant.color));
                        setVersionOfColor(variant);
                      }}
                      className={`h-10 w-20 px-3 py-1.5 rounded-lg border ${getColorClass(
                        variant.color
                      )}`}
                    ></button>
                    <span
                      className={`mt-2 text-sm text-center text-gray-700 ${
                        versionOfColor === variant
                          ? "underline underline-offset-4 decoration-red-500"
                          : ""
                      }`}
                    >
                      {variant.color}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="text-gray-700">
              <p className="text-lg font-medium">Giá bán lẻ đề xuất</p>
              <h2 className="text-2xl font-bold text-black">
                {versionOfColor.price.toLocaleString()}{" "}
                <span className="text-gray-500">VNĐ</span>
              </h2>
            </div>
          </div>
          <div className="w-2/3 flex flex-col items-center justify-center p-4">
            <Image
              width={600}
              height={350}
              src={versionOfColor.images[0]}
              alt="test"
            ></Image>
          </div>
        </div>
        {versionOfColor.description && (
          <div className="h-[700px] w-full bg-slate-500" id="thiet-ke">
            Ơ
            <div className="w-full max-w-6xl mx-auto p-6">
              <div className="bg-white/90 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Thiết kế</h3>
                <p className="text-gray-700 leading-relaxed">
                  {versionOfColor.description}
                </p>
              </div>
            </div>
          </div>
        )}
        {versionOfColor.dongCo && (
          <div className="h-[700px] w-full bg-slate-500" id="dong-co">
            Ơ
            <div className="w-full max-w-6xl mx-auto p-6">
              <div className="bg-white/90 rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4">động cơ</h3>
                <p className="text-gray-700 leading-relaxed">
                  {versionOfColor.dongCo}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MainDetailPage;
