'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { supabase } from '@/lib/supabase';
import { getImageUrl, getQCImageUrl } from '@/lib/utils';
import { ProductDetailSkeleton } from '@/components/ProductSkeleton';

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

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [productImage, setProductImage] = useState<string | null>(null);
  const [qcImage, setQCImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        // 获取产品数据
        const { data: productData, error: productError } = await supabase
          .from('traffic_products')
          .select('*')
          .eq('id', params.id)
          .single();

        if (productError) throw productError;
        if (!productData) notFound();

        console.log('Product data:', {
          id: productData.id,
          image_id: productData.image_id,
          qc_image_id: productData.qc_image_id
        });

        setProduct(productData);

        // 获取图片 URLs
        if (productData.image_url || productData.image_id) {
          const url = await getImageUrl(productData.image_id, productData.image_url);
          setProductImage(url);
        }

        if (productData.qc_image_url || productData.qc_image_id) {
          const url = await getQCImageUrl(productData.qc_image_id, productData.qc_image_url);
          setQCImage(url);
        }
      } catch (err) {
        console.error('Error:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [params.id]);

  if (loading) return <ProductDetailSkeleton />;
  if (error) return <div>Error: {error}</div>;
  if (!product) return notFound();

  return (
    <div className="bg-white">
      {/* Banner 区域 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center">
          <div className="w-[1212px] h-[225px] bg-black rounded-[20px] flex flex-col justify-center items-center px-[60px]">
            <h1 className="text-[48px] font-bold text-white text-center">
              {product.name}
            </h1>
            <p className="text-[32px] font-bold text-white mt-2 text-center">
              ${product.current_price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* 产品详情区域 */}
      <div className="flex justify-center py-[60px]">
        <div className="w-[1320px]">
          {/* 图片区域 */}
          <div className="flex justify-center gap-[40px]">
            {/* 商品图片 */}
            <div className="w-[440px] h-[456px] border border-[#DADEE6] overflow-hidden">
              {productImage ? (
                <Image
                  src={productImage}
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
            <div className="w-[440px] h-[456px] border border-[#DADEE6] overflow-hidden">
              {qcImage ? (
                <Image
                  src={qcImage}
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