"use client"
import './globals.css'
import { Footer } from '@/components/footer/Footer'
import Hamburger from '@/components/Hamburger/Hamburger'
import { usePathname } from 'next/navigation'

// export const metadata = {
//   title: 'Makeathon 6',
//   description: 'The official Makeathon website',
// }

export default function RootLayout({ children }) {
  const pathName = usePathname();
  if (pathName == "/") {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  } else if(pathName=='/timeline'){
    return ( 
      <html lang="en">
        <Hamburger/>
        <body>{children}</body>
      </html>
    );
    }else{
      return(
      <html lang="en">
        <Hamburger/>
        <body>{children}</body>
        <Footer/>
      </html>
      );
  }
}

