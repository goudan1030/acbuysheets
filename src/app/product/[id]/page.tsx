'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const ProductPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="bg-white">
      {/* Banner 区域 */}
      <div className="bg-[#D6FFF1] h-[320px]">
        <div className="h-full flex justify-center items-center">
          <div className="w-[1212px] h-[225px] bg-black rounded-[20px] flex flex-col justify-center items-center px-[60px]">
            <h1 className="text-[48px] font-bold text-white text-center">
              Sample Product Name - Limited Edition 2024
            </h1>
            <p className="text-[32px] font-bold text-white mt-2 text-center">
              $299.00
            </p>
          </div>
        </div>
      </div>

      {/* 产品详情区域 */}
      <div className="flex justify-center py-[60px]">
        <div className="w-[1320px]">
          {/* 图片区域 */}
          <div className="flex justify-center gap-[40px]">
            <div className="w-[440px] h-[456px] border border-[#DADEE6] overflow-hidden">
              <div className="w-full h-full bg-gray-200" />
            </div>
            <div className="w-[440px] h-[456px] border border-[#DADEE6] overflow-hidden">
              <div className="w-full h-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>

      {/* 按钮区域 */}
      <div className="bg-[#FBFBFE] py-8">
        <div className="flex flex-col items-center">
          {/* 主按钮 */}
          <button className="w-[264px] h-[48px] bg-black text-white rounded flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            <span className="text-[16px]">Open ACBuy Link</span>
          </button>

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

export default ProductPage; 