'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { getImageUrl } from '@/lib/utils';
import { ProductCardSkeleton } from '@/components/ProductSkeleton';

const CATEGORIES = {
  'shoes': 'Shoes',
  'hoodies': 'Hoodies',
  't-shirts': 'T-Shirts',
  'jackets': 'Jackets',
  'pants': 'Pants',
  'headwear': 'Headwear',
  'accessories': 'Accessories',
  'other': 'Other'
} as const;

type CategorySlug = keyof typeof CATEGORIES;

// 使用 Next.js 的标准类型定义
type Props = {
  params: {
    slug: string;  // 改回 string 类型
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface Product {
  id: number;
  name: string;
  category: string;
  current_price: number;
  image_url: string | null;
  image_id: number | null;
  purchase_link: string;
}

// 添加默认图片
const DEFAULT_IMAGE = '/images/placeholder.png'; // 确保这个文件存在于 public/images 目录

export default function CategoryPage({ params }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [productImages, setProductImages] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 32;

  const { slug } = params;

  // 计算分页数据
  const totalPages = Math.ceil((products?.length || 0) / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const categoryValue = CATEGORIES[slug as CategorySlug];
        
        // 获取产品数据
        const { data, error } = await supabase
          .from('traffic_products')
          .select('*')
          .eq('category', categoryValue)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // 详细记录每个产品的数据
        data?.forEach(product => {
          console.log('Product details:', {
            id: product.id,
            name: product.name,
            image_id: product.image_id,
            image_id_type: typeof product.image_id
          });
        });

        setProducts(data || []);
        
        // 获取所有产品的图片 URL
        const imageUrls: Record<number, string> = {};
        
        if (data) {
          await Promise.all(
            data?.map(async (product) => {
              // 优先使用直接链接，否则查询 images 表
              const url = await getImageUrl(product.image_id, product.image_url);
              if (url) {
                imageUrls[product.id] = url;
              }
            }) || []
          );
        }

        console.log('Final image URLs:', imageUrls);
        setProductImages(imageUrls);
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [slug]);

  console.log('Render state:', {
    loading,
    error,
    productsCount: products.length,
    category: slug,
    validCategory: Object.keys(CATEGORIES).includes(slug)
  });

  if (!Object.keys(CATEGORIES).includes(slug)) {
    console.log('Category not found, redirecting...');
    notFound();
  }

  // 分页处理函数
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="bg-white">
        <div className="bg-[#D6FFF1] h-[320px]">
          <div className="h-full flex justify-center items-center">
            <div className="w-[820px] h-[154px] bg-black rounded-[20px] flex items-center justify-center">
              <h1 className="text-[72px] font-bold text-white">
                {CATEGORIES[slug as CategorySlug]}
              </h1>
            </div>
          </div>
        </div>

        <div className="p-[80px]">
          <div className="grid grid-cols-4 gap-y-6">
            {Array(8).fill(0).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    console.log('Showing error state:', error);
    return <div>Error: {error}</div>;
  }

  console.log('Rendering products list:', {
    category: slug,
    productsCount: products.length,
    firstProduct: products[0]
  });

  return (
    <div className="bg-white">
      {/* Banner 区域 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center">
          <div className="w-[820px] h-[154px] bg-black rounded-[20px] flex items-center justify-center">
            <h1 className="text-[72px] font-bold text-white">
              {CATEGORIES[slug as CategorySlug]}
            </h1>
          </div>
        </div>
      </div>

      {/* 产品列表区域 */}
      <div className="p-[80px]">
        <div className="grid grid-cols-4 gap-y-6">
          {currentProducts.map((product) => (
            <Link 
              href={`/product/${product.id}`} 
              key={product.id} 
              className="block border border-[#DADEE6] group h-[382px] -ml-[1px] -mt-[1px]"
            >
              <div className="h-[318px] bg-gray-100 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                  style={{ 
                    backgroundImage: productImages[product.id]
                      ? `url(${productImages[product.id]})`
                      : `url(${DEFAULT_IMAGE})`,
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

        {/* 分页按钮 */}
        {totalPages > 1 && (  // 只有当总页数大于1时才显示分页按钮
          <div className="mt-12 flex justify-center gap-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`w-[280px] h-[44px] rounded-[20px] border border-black shadow-[0px_5px_15px_0px_rgba(0,0,0,0.35)] 
                flex items-center justify-center text-[16px] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            >
              Previous
            </button>
            
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`w-[280px] h-[44px] rounded-[20px] bg-black text-white shadow-[0px_5px_15px_0px_rgba(0,0,0,0.35)]
                flex items-center justify-center text-[16px] ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 