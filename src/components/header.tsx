"use client";

import React, { useState } from "react";
import logoo from "../assets/image/logo_honda_v1.png";
import Image from "next/image";
import { NAVIGATE_MENUS } from "@/constants/naviagte-menus";

import Hamburger from "hamburger-react";
import { ModeToggle } from "./toggle-theme";
import MobileNavButton from "./mobile-nav-button";
import Link from "next/link";


function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="fixed w-full bg-white z-10">
      <div className="flex justify-between xl:justify-around items-center h-[60px]">
        <div>
          <Link href="/">  
           <Image
            src={logoo}
            alt="ok"
            className="h-[30px] w-[326px] object-contain"
            blurDataURL="/"
          /></Link>
       
        </div>
        <div className="hidden xl:block">
          <div className="flex items-center gap-5">
            <ul className="flex justify-center items-center gap-5">
              <li>My Honda+</li>
              <li>Bán hàng doanh nghiệp</li>
              <li>Câu hỏi thường gặp</li>
              <li>Liên hệ</li>
              <li>Tuyển dụng</li>
              <li>Thăm dò ý kiến khách hàng</li>
              <li>
                <button>icon kính lúp <ModeToggle/></button>
              </li>
            </ul>
          </div>
        </div>
        <div className="block xl:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />;
        </div>
      </div>
      {isOpen && (
        <nav className="block xl:hidden">
          <div className="flex justify-between ">
            <ul className="w-full bg-slate-300 font-mono text-xl font-extrabold text-red-500 p-4 divide-y-2 divide-red-500">
              {NAVIGATE_MENUS.map((item) => (
                <li key={item.id}>
                  <MobileNavButton data={item} />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      <div className="hidden xl:block">
        <div className="grid grid-cols-[553px_1fr] items-end relative">
          <div className="z-10 flex items-center justify-start">
            <div className="w-full h-[53px] bg-[#de0000]">
              <ul className="h-full flex justify-center items-center gap-5 text-white antialiased">
                <li>Oto</li>
                <li>Xe may</li>
                <li>Về Honda</li>
                <li>An toan giao thong</li>
                <li>Dua the thao</li>
              </ul>
            </div>
            <svg height="53" width="43" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M 0 0 L 0 53 L 43 53 C 15 40 30 5 0 0 Z"
                style={{ fill: "#de0000", stroke: "#de0000", strokeWidth: 0 }}
              ></path>
            </svg>
          </div>
          <ul className="absolute bg-black bottom-0 w-full h-[42px] text-white flex items-center justify-start gap-5 pl-[583px]">
            <li>Hoạt động của Honda toàn cầu</li>
            <li>Hoạt động của Honda Việt Nam</li>
            <li>Tin tức</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
