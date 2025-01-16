'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="h-12" />
      
      <nav className="bg-black text-white h-12 fixed top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-20 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <Image 
                  src="/logo.svg" 
                  alt="电商网站" 
                  width={100}
                  height={24}
                  className="h-6 w-auto"
                />
              </Link>
            </div>
            
            <button 
              className="sm:hidden z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>

            <div className="hidden sm:flex items-center space-x-4">
              <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/category/shoes" className="text-sm hover:text-gray-300 transition-colors">
                Shoes
              </Link>
              <Link href="/category/hoodies-sweaters" className="text-sm hover:text-gray-300 transition-colors">
                Hoodies/Sweaters
              </Link>
              <Link href="/category/t-shirts" className="text-sm hover:text-gray-300 transition-colors">
                T-Shirts
              </Link>
              <Link href="/category/jackets" className="text-sm hover:text-gray-300 transition-colors">
                Jackets
              </Link>
              <Link href="/category/pants-shorts" className="text-sm hover:text-gray-300 transition-colors">
                Pants/Shorts
              </Link>
              <Link href="/category/headwear" className="text-sm hover:text-gray-300 transition-colors">
                Headwear
              </Link>
              <Link href="/category/accessories" className="text-sm hover:text-gray-300 transition-colors">
                Accessories
              </Link>
              <Link href="/category/other" className="text-sm hover:text-gray-300 transition-colors">
                Other Stuff
              </Link>
              <span className="text-sm hover:text-gray-300 transition-colors cursor-not-allowed">
                Sign up to ACBuy
              </span>
              <span className="text-sm hover:text-gray-300 transition-colors cursor-not-allowed">
                Report Dead Link
              </span>
            </div>

            {isMenuOpen && (
              <>
                <div 
                  className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
                  onClick={() => setIsMenuOpen(false)}
                />
                
                <div className="fixed inset-x-0 top-12 bg-black sm:hidden">
                  <div className="flex flex-col divide-y divide-gray-800">
                    <Link 
                      href="/" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/category/shoes" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Shoes
                    </Link>
                    <Link 
                      href="/category/hoodies-sweaters" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hoodies/Sweaters
                    </Link>
                    <Link 
                      href="/category/t-shirts" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      T-Shirts
                    </Link>
                    <Link 
                      href="/category/jackets" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Jackets
                    </Link>
                    <Link 
                      href="/category/pants-shorts" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pants/Shorts
                    </Link>
                    <Link 
                      href="/category/headwear" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Headwear
                    </Link>
                    <Link 
                      href="/category/accessories" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accessories
                    </Link>
                    <Link 
                      href="/category/other" 
                      className="px-4 py-4 hover:bg-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Other Stuff
                    </Link>
                    <div className="px-4 py-4 hover:bg-gray-900 transition-colors cursor-not-allowed">
                      Sign up to ACBuy
                    </div>
                    <div className="px-4 py-4 hover:bg-gray-900 transition-colors cursor-not-allowed">
                      Report Dead Link
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
} 