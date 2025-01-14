'use client';

import HomeBanner from '@/components/HomeBanner';
import CategorySection from '@/components/CategorySection';
import QrSection from '@/components/QrSection';
import WhatIsAcbuy from '@/components/WhatIsAcbuy';
import HowToBuy from '@/components/HowToBuy';

export default function Home() {
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
