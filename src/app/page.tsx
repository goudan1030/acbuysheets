'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import HomeBanner from '@/components/HomeBanner';
import CategorySection from '@/components/CategorySection';
import QrSection from '@/components/QrSection';
import WhatIsAcbuy from '@/components/WhatIsAcbuy';
import HowToBuy from '@/components/HowToBuy';

interface Product {
  id: number;
  name: string;
  category: string;
  current_price: number;
  image_url: string | null;
  qc_image_url: string | null;
  purchase_link: string;
  created_at: string;
  updated_at: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        console.log('Fetching all products...');
        
        const { data, error } = await supabase
          .from('traffic_products')
          .select('*')
          .order('created_at', { ascending: false });

        console.log('Database response:', {
          success: !error,
          error,
          dataCount: data?.length,
          data
        });

        if (error) {
          throw error;
        }

        setProducts(data || []);

        // 详细输出每个产品的信息
        data?.forEach((product, index) => {
          console.log(`Product ${index + 1}:`, {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.current_price,
            hasImage: !!product.image_url,
            hasQCImage: !!product.qc_image_url,
            link: product.purchase_link,
            created: new Date(product.created_at).toLocaleString(),
            updated: new Date(product.updated_at).toLocaleString()
          });
        });

      } catch (err) {
        console.error('Error fetching products:', err);
      }
    }

    fetchAllProducts();
  }, []);

  return (
    <div className="relative">
      <HomeBanner />
      <div className="mt-[280px]">
        <CategorySection />
        <QrSection />
        <WhatIsAcbuy />
        <HowToBuy />
      </div>
    </div>
  );
}
