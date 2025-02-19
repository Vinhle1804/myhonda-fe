export enum ProductType {
	xeGa = 'Xe ga',
	xeSo = 'Xe số',
	xeConTay = 'Xe côn tay',
	xePkl = 'Xe phân khối lớn',
	xeDien = 'Xe điện'
}

export interface IProduct {
	id: number | string,
	name: string,
	slug: string,
	type: ProductType,
	versions: IProductVersion[]
}

export interface IProductVersion {
	title: string,
	variants: {
		id: string | number
		color: string,
		images: string[],
		buttonStyle?: string,
		price: number | string,
		description?: string,
		dongCo: string
	}[]
}

export const PRODUCTS: IProduct[] = [
	{
		id: 1,
		name: 'SH350i',
		slug: 'sh350i',
		type: ProductType.xeGa,
		versions: [
			{
				title: 'Phiên bản thể thao',
				variants: [
					{
						id: '1.1',
						color: 'blue',
						
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730800747/6.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730800747/7.png'
						],
						price: 142690000,
						description: 'Màu xanh năng động, phù hợp với phong cách thể thao và hiện đại',
						dongCo: '350cc SOHC'
					},
					{
						id: '1.2',
						color: 'red',
						buttonStyle:'bg-gradient-to-r from-slate-400 to-slate-700',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730800509/6.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730800509/0.png'
						],
						price: 152690000,
						dongCo: '350cc SOHC okok'
					}
				]
			},
			{
				title: 'Phiên bản đặc biệt',
				variants: [
					{
						id: '2.1',
						color: 'Xám đen',
						buttonStyle:'bg-gradient-to-r from-slate-500 to-black',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730798593/6.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730798593/1.png'
						],
						price: 152190000,
						description: 'Màu xám đen huyền bí, kết hợp hoàn hảo giữa sự tinh tế và mạnh mẽ',
						dongCo: '350cc SOHC huhuhu'
					}
				]
			},
			{
				title: 'Phiên bản cao cấp',
				variants: [
					{
						id: '3.1',
						color: 'Trắng đen',
						buttonStyle:'bg-gradient-to-r from-white to-black',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730800088/6.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/1730800088/2.png'
						],
						price: 151190000,
						description: 'Sự kết hợp tinh tế giữa trắng và đen, tạo nên vẻ sang trọng đỉnh cao',
						dongCo: '350cc SOHC  aaa'
					}
				]
			}
		]
	},
	{
		id: 2,
		name: 'Vision',
		slug: 'vision',
		type: ProductType.xeGa,
		versions: [
			{
				title: 'Phiên bản thời trang',
				variants: [
					{
						id: '2.1',
						color: 'Xanh',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/vision/blue1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/vision/blue2.png'
						],
						price: 35000000,
						description: 'Màu xanh tươi trẻ, phù hợp với phong cách năng động của giới trẻ',
						dongCo: '110cc, 4 kỳ, 1 xy-lanh, làm mát bằng không khí'
					},
					{
						id: '2.2',
						color: 'Trắng',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/vision/white1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/vision/white2.png'
						],
						price: 35500000,
						description: 'Màu trắng thanh lịch, tạo nên vẻ đẹp tinh tế và hiện đại',
						dongCo: '110cc, 4 kỳ, 1 xy-lanh, làm mát bằng không khí'
					}
				]
			}
		]
	},
	{
		id: 3,
		name: 'Air Blade',
		slug: 'air-blade',
		type: ProductType.xeGa,
		versions: [
			{
				title: 'Phiên bản 150cc',
				variants: [
					{
						id: '3.1',
						color: 'Bạc',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/airblade/silver1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/airblade/silver2.png'
						],
						price: 56000000,
						description: 'Màu bạc thời thượng, thể hiện phong cách công nghệ hiện đại',
						dongCo: '150cc, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch'
					},
					{
						id: '3.2',
						color: 'Xanh đen',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/airblade/blue1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/airblade/blue2.png'
						],
						price: 56500000,
						description: 'Màu xanh đen thể thao, tạo điểm nhấn mạnh mẽ và cá tính',
						dongCo: '150cc, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch'
					}
				]
			}
		]
	},
	{
		id: 4,
		name: 'Lead',
		slug: 'lead',
		type: ProductType.xeGa,
		versions: [
			{
				title: 'Phiên bản tiêu chuẩn',
				variants: [
					{
						id: '4.1',
						color: 'Đỏ',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/lead/red1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/lead/red2.png'
						],
						price: 42000000,
						description: 'Màu đỏ nổi bật, phù hợp với người dùng cá tính và năng động',
						dongCo: '125cc, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch'
					},
					{
						id: '4.2',
						color: 'Xanh lơ',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/lead/blue1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/lead/blue2.png'
						],
						price: 42500000,
						description: 'Màu xanh lơ nhẹ nhàng, tạo cảm giác thoải mái và thanh lịch',
						dongCo: '125cc, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch'
					}
				]
			}
		]
	},
	{
		id: 5,
		name: 'Wave Alpha',
		slug: 'wave-alpha',
		type: ProductType.xeSo,
		versions: [
			{
				title: 'Phiên bản tiêu chuẩn',
				variants: [
					{
						id: '5.1',
						color: 'Xanh',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/wavealpha/blue1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/wavealpha/blue2.png'
						],
						price: 18000000,
						description: 'Màu xanh truyền thống, phù hợp với mọi độ tuổi và phong cách',
						dongCo: '110cc, 4 kỳ, 1 xy-lanh, làm mát bằng không khí'
					},
					{
						id: '5.2',
						color: 'Trắng',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/wavealpha/white1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/wavealpha/white2.png'
						],
						price: 18500000,
						description: 'Màu trắng trang nhã, dễ dàng phối hợp trong mọi hoàn cảnh',
						dongCo: '110cc, 4 kỳ, 1 xy-lanh, làm mát bằng không khí'
					}
				]
			}
		]
	},
	{
		id: 6,
		name: 'Winner X',
		slug: 'winner-x',
		type: ProductType.xeConTay,
		versions: [
			{
				title: 'Phiên bản thể thao',
				variants: [
					{
						id: '6.1',
						color: 'Đen',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/winnerx/black1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/winnerx/black2.png'
						],
						price: 46000000,
						description: 'Màu đen huyền bí, tôn lên vẻ mạnh mẽ đặc trưng của dòng xe côn tay',
						dongCo: '150cc, DOHC, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch'
					},
					{
						id: '6.2',
						color: 'Đỏ',
						images: [
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/winnerx/red1.png',
							'https://cdn.honda.com.vn/motorbike-versions/Image360/November2024/winnerx/red2.png'
						],
						price: 46500000,
						description: 'Màu đỏ thể thao, khẳng định cá tính mạnh mẽ của người lái',
						dongCo: '150cc, DOHC, 4 kỳ, 1 xy-lanh, làm mát bằng dung dịch'
					}
				]
			}
		]
	}
];