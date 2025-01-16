import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { supabase } from '@/lib/supabase';
import { getImageUrl, getQCImageUrl } from '@/lib/utils';
import type { PageProps } from 'next';

interface Product {
  id: number;
  name: string;
  category: string;
  current_price: number;
  image_url: string | null;
  image_id: number | null;
  qc_image_url: string | null;
  qc_image_id: number | null;
  purchase_link: string;
}

async function getProduct(id: string) {
  const { data: product, error } = await supabase
    .from('traffic_products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  if (!product) return null;

  // 获取图片 URLs
  const productImage = product.image_url || await getImageUrl(product.image_id, product.image_url);
  const qcImage = product.qc_image_url || await getQCImageUrl(product.qc_image_id, product.qc_image_url);

  return {
    ...product,
    productImage,
    qcImage
  };
}

export default async function ProductPage({
  params,
}: PageProps<{ id: string }>) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Banner 区域 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center px-4 sm:px-0">
          <div className="w-[90%] sm:w-[1212px] h-[225px] bg-black rounded-[20px] flex flex-col justify-center items-center px-4 sm:px-[60px]">
            <h1 className="text-[32px] sm:text-[48px] font-bold text-white text-center">
              {product.name}
            </h1>
            <p className="text-[24px] sm:text-[32px] font-bold text-white mt-2 text-center">
              ${product.current_price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* 产品详情区域 */}
      <div className="flex justify-center py-[60px] px-4 sm:px-0">
        <div className="w-full sm:w-[1320px]">
          {/* 图片区域 */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-[40px]">
            {/* 商品图片 */}
            <div className="w-full sm:w-[440px] aspect-square sm:h-[456px] border border-[#DADEE6] overflow-hidden">
              {product.productImage ? (
                <Image
                  src={product.productImage}
                  alt={product.name}
                  width={440}
                  height={456}
                  className="w-full h-full object-contain bg-white"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-white" />
              )}
            </div>
            {/* QC图片 */}
            <div className="w-full sm:w-[440px] aspect-square sm:h-[456px] border border-[#DADEE6] overflow-hidden">
              {product.qcImage ? (
                <Image
                  src={product.qcImage}
                  alt={`${product.name} QC`}
                  width={440}
                  height={456}
                  className="w-full h-full object-contain bg-white"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-white" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="bg-[#FBFBFE] py-8">
        <div className="flex flex-col items-center">
          {/* 主按钮 */}
          <a
            href={product.purchase_link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[264px] h-[48px] bg-black text-white rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            <span className="text-[16px]">Open ACBuy Link</span>
          </a>

          {/* 帮助链接 */}
          <Link 
            href="https://streamable.com/2jnuvk"
            target="_blank"
            className="mt-4 text-[#31B38C] underline hover:text-[#2a9d7c] transition-colors"
          >
            How to bypass "Risk Alert" warning
          </Link>
        </div>
      </div>
    </div>
  );
} 