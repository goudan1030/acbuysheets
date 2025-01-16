import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { PageProps } from 'next';
import { supabase } from '@/lib/supabase';
import { getImageUrl } from '@/lib/utils';
import { ProductCardSkeleton } from '@/components/ProductSkeleton';

const CATEGORIES = {
  'shoes': 'Shoes',
  'hoodies-sweaters': 'Hoodies/Sweaters',
  't-shirts': 'T-Shirts',
  'jackets': 'Jackets',
  'pants-shorts': 'Pants/Shorts',
  'headwear': 'Headwear',
  'accessories': 'Accessories',
  'other': 'Other Stuff'
} as const;

type CategorySlug = keyof typeof CATEGORIES;

interface Product {
  id: number;
  name: string;
  category: string;
  current_price: number;
  image_url: string | null;
  image_id: number | null;
  purchase_link: string;
}

const DEFAULT_IMAGE = '/images/placeholder.png';

async function getProductsWithImages(slug: string) {
  const categoryValue = CATEGORIES[slug as CategorySlug];
  
  const { data, error } = await supabase
    .from('traffic_products')
    .select('*')
    .eq('category', categoryValue)
    .order('created_at', { ascending: false });

  if (error) throw error;

  // 获取所有产品的图片 URL
  const productsWithImages = await Promise.all(
    (data || []).map(async (product) => {
      const imageUrl = product.image_url || await getImageUrl(product.image_id, null);
      return {
        ...product,
        displayImage: imageUrl || DEFAULT_IMAGE
      };
    })
  );

  return productsWithImages;
}

export default async function CategoryPage({
  params,
}: PageProps<{ slug: string }>) {
  if (!Object.keys(CATEGORIES).includes(params.slug)) {
    notFound();
  }

  const products = await getProductsWithImages(params.slug);

  return (
    <div className="bg-white">
      {/* Banner 区域 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center px-4 sm:px-0">
          <div className="w-[90%] sm:w-[820px] h-[154px] bg-black rounded-[20px] flex items-center justify-center">
            <h1 className="text-[48px] sm:text-[72px] font-bold text-white text-center px-4 sm:px-0">
              {CATEGORIES[params.slug as CategorySlug]}
            </h1>
          </div>
        </div>
      </div>

      {/* 产品列表区域 */}
      <div className="px-4 sm:px-[80px] py-[60px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link 
              href={`/product/${product.id}`} 
              key={product.id} 
              className="block border border-[#DADEE6] group"
            >
              <div className="aspect-square bg-gray-100 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundImage: `url(${product.displayImage})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: '#ffffff'
                  }}
                />
              </div>
              
              <div className="h-[64px] flex flex-col justify-center px-4">
                <h3 className="text-sm font-medium text-black group-hover:text-gray-600 truncate">
                  {product.name}
                </h3>
                <p className="text-[14px] text-black mt-1">
                  ${product.current_price.toFixed(2)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductListSkeleton() {
  return (
    <div className="p-[80px]">
      <div className="grid grid-cols-4 gap-y-6">
        {Array(8).fill(0).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}

function ProductList({ products }: { products: (Product & { displayImage: string })[] }) {
  return (
    <div className="p-[80px]">
      <div className="grid grid-cols-4 gap-y-6">
        {products.map((product) => (
          <Link 
            href={`/product/${product.id}`} 
            key={product.id} 
            className="block border border-[#DADEE6] group h-[382px] -ml-[1px] -mt-[1px]"
          >
            <div className="h-[318px] bg-gray-100 overflow-hidden">
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                style={{ 
                  backgroundImage: `url(${product.displayImage})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundColor: '#ffffff'
                }}
              />
            </div>
            
            <div className="h-[64px] flex flex-col justify-center px-4">
              <h3 className="text-sm font-medium text-black group-hover:text-gray-600 truncate">
                {product.name}
              </h3>
              <p className="text-[14px] text-black mt-1">
                ${product.current_price.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 