export interface INavigateItem {
  id: string;
  label: string;
  path?: string;
  children?: INavigateItem[];
}

export const NAVIGATE_MENUS: INavigateItem[] = [
  {
    id: "1",
    label: "Ô tô",
    children: [
      { id: "1.1", label: "Sản phẩm", path: "/san-pham" },
      { id: "1.2", label: "Khuyến mãi", path: "/khuyen-mai" },
      { id: "1.3", label: "Sự kiện", path: "/khuyen-mai" },
      { id: "1.4", label: "Cửa hàng ủy nhiệm", path: "/khuyen-mai" },
      { id: "1.5", label: "Dịch vụ bán hàng", path: "/khuyen-mai" },
      { id: "1.6", label: "Phụ tùng và Phụ kiện", path: "/khuyen-mai" },
      { id: "1.7", label: "Tin tức", path: "/khuyen-mai" },
    ],
  },
  {
    id: "2",
    label: "Xe máy",
    children: [
      { id: "2.1", label: "Sản phẩm", path: "/san-pham" },
      { id: "2.2", label: "Khuyến mãi", path: "/khuyen-mai" },
      { id: "2.3", label: "Sự kiện", path: "/khuyen-mai" },
      { id: "2.4", label: "Cửa hàng ủy nhiệm", path: "/khuyen-mai" },
      { id: "2.5", label: "Dịch vụ bán hàng", path: "/khuyen-mai" },
      { id: "2.6", label: "Phụ tùng và Phụ kiện", path: "/khuyen-mai" },
      { id: "2.7", label: "Tin tức", path: "/khuyen-mai" },
    ],
  },
  {
    id: "3",
    label: "Về Honda",
    children: [
      { id: "1.1", label: "Sản phẩm", path: "/san-pham" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
    ],
  },
  {
    id: "4",
    label: "An toàn giao thông",
    children: [
      { id: "1.1", label: "Sản phẩm", path: "/san-pham" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
    ],
  },
  {
    id: "5",
    label: "Đua xe thể thao",
    children: [
      { id: "1.1", label: "Sản phẩm", path: "/san-pham" },
      { id: "1.1", label: "Khuyến mãi", path: "/khuyen-mai" },
    ],
  },
];

