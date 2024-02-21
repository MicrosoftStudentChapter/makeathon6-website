import localFont from 'next/font/local'
import { Jura } from 'next/font/google'

// Font files can be colocated inside of `app`
export const myFont = Jura({
  display: 'swap',
  subsets: ['latin'],
  weight: '500'
})

// my font bold
export const myFontBold = Jura({
  display: 'swap',
  subsets: ['latin'],
  weight: '600'
})
// localFont({
//   src: '../../public/fonts/Kingvoon.woff',
//   display: 'swap',
// })

// export const juraFont = Jura