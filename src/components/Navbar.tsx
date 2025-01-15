import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-black text-white h-12">
      <div className="px-20 h-full">
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
          
          <div className="flex items-center space-x-4">
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
        </div>
      </div>
    </nav>
  );
} 