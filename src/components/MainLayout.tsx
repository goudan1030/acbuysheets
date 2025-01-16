'use client';

import { usePathname } from 'next/navigation';
import ScrollToTop from './ScrollToTop';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div>
      {children}
      <ScrollToTop />
    </div>
  );
} 