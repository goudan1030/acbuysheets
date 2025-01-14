'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

const categories = [
  { id: 'shoes', title: 'Shoes', image: '/categories/shoes.jpg' },
  { id: 'hoodies', title: 'Hoodies/Sweaters', image: '/categories/hoodies.jpg' },
  { id: 't-shirts', title: 'T-Shirts', image: '/categories/t-shirts.jpg' },
  { id: 'jackets', title: 'Jackets', image: '/categories/jackets.jpg' },
  { id: 'pants', title: 'Pants/Shorts', image: '/categories/pants.jpg' },
  { id: 'headwear', title: 'Headwear', image: '/categories/headwear.jpg' },
  { id: 'accessories', title: 'Accessories', image: '/categories/accessories.jpg' },
  { id: 'other', title: 'Other Stuff', image: '/categories/other.jpg' },
];

export default function CategorySection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 340; // 卡片宽度(300) + 间距(40)
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
    <section className="bg-[#FBFBFE] h-[638px]">
      <div className="flex justify-center py-[60px]">
        <div className="w-[1320px]">
          <h2 className="text-[48px] font-bold text-black mb-4">
            Browse using the buttons below!
          </h2>
          
          <div className="flex gap-4 mb-8">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ChevronLeftIcon className="w-6 h-6 text-black" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center hover:bg-gray-200 transition-colors"
            >
              <ChevronRightIcon className="w-6 h-6 text-black" />
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex gap-x-[40px] min-w-min">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="block flex-shrink-0 group"
                >
                  <div className="w-[300px] h-[300px] bg-white rounded-[12px] overflow-hidden">
                    <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  
                  <h3 className="text-[20px] font-bold mt-4 text-center">
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