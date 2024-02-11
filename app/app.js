"use client"
import { Footer } from '@/components/footer/Footer';
import Hamburger from '@/components/Hamburger/Hamburger';
import { usePathname } from 'next/navigation';

export default function app({ children }) {
  const pathName = usePathname();

  if (pathName === '/') {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  } else if (pathName === '/timeline') {
    return (
      <html lang="en">
        <Hamburger key={pathName}/>
        <body>{children}</body>
      </html>
    );
  } else {
    return (
      <html lang="en">
        <Hamburger key={pathName}/>
        <body>{children}</body>
        <Footer />
      </html>
    );
  }
}