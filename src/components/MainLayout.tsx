'use client';

import { usePathname } from 'next/navigation';
import Banner from '@/components/Banner';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {children}
    </div>
  );
} 