'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const categories = [
  { id: 'shoes', title: 'Shoes', image: '/categories/shoes.jpg' },
  { id: 'hoodies-sweaters', title: 'Hoodies/Sweaters', image: '/categories/hoodies.jpg' },
  { id: 't-shirts', title: 'T-Shirts', image: '/categories/t-shirts.jpg' },
  { id: 'jackets', title: 'Jackets', image: '/categories/jackets.jpg' },
  { id: 'pants-shorts', title: 'Pants/Shorts', image: '/categories/pants.jpg' },
  { id: 'headwear', title: 'Headwear', image: '/categories/headwear.jpg' },
  { id: 'accessories', title: 'Accessories', image: '/categories/accessories.jpg' },
  { id: 'other', title: 'Other Stuff', image: '/categories/other.jpg' },
];

export default function CategorySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = window.innerWidth < 640 ? 
      container.clientWidth : 340; // 移动端滚动整个视窗宽度
    
    const currentScroll = container.scrollLeft;
    const targetScroll = direction === 'left' 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-[#FBFBFE] h-auto sm:h-[638px]">
      <div className="flex justify-center py-[30px] sm:py-[60px]">
        <div className="w-full px-4 sm:px-0 sm:w-[1320px]">
          <h2 className="text-[32px] sm:text-[48px] font-bold text-black mb-4">
            Browse using the buttons below!
          </h2>
          
          <div className="flex gap-4 mb-8 hidden sm:flex">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ChevronLeftIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ChevronRightIcon className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
          >
            <div className="grid grid-cols-2 sm:flex gap-4 sm:gap-[40px]">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="block flex-shrink-0 group"
                >
                  <div className="w-full sm:w-[300px] aspect-square bg-white rounded-[12px] overflow-hidden">
                    <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-[16px] sm:text-[20px] font-bold mt-4 text-center">
                    {category.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 