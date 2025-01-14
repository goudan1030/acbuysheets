import { notFound } from 'next/navigation';
import Link from 'next/link';

// 定义分类映射
const CATEGORIES = {
  'shoes': 'Shoes',
  'hoodies': 'Hoodies & Sweaters',
  't-shirts': 'T-Shirts',
  'jackets': 'Jackets',
  'pants': 'Pants & Shorts',
  'headwear': 'Headwear',
  'accessories': 'Accessories',
  'other': 'Other'
} as const;

type CategorySlug = keyof typeof CATEGORIES;

type Props = {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CategoryPage({ params }: Props) {
  // 验证分类是否存在
  if (!Object.keys(CATEGORIES).includes(params.slug)) {
    notFound();
  }

  const category = params.slug as CategorySlug;

  return (
    <div className="bg-white min-h-screen">
      {/* Banner 区域 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center">
          <div className="w-[820px] h-[154px] bg-black rounded-[20px] flex items-center justify-center">
            <h1 className="text-[72px] font-bold text-white">
              {CATEGORIES[category]}
            </h1>
          </div>
        </div>
      </div>

      {/* 产品列表区域 */}
      <div className="p-[80px]">
        <div className="grid grid-cols-4 gap-y-6">
          {[1, 2, 3, 4, 5, 6, 8].map((item) => (
            <Link 
              href={`/product/${item}`} 
              key={item} 
              className="block border border-[#DADEE6] group h-[382px] -ml-[1px] -mt-[1px]"
            >
              <div className="h-[318px] bg-gray-100 overflow-hidden">
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
              </div>
              
              <div className="h-[64px] flex flex-col justify-center px-4">
                <h3 className="text-sm font-medium text-black group-hover:text-gray-600 truncate">
                  Sample Product {item} - This is a long product title to test single line ellipsis
                </h3>
                <p className="text-[14px] text-black mt-1">
                  $299.00
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 