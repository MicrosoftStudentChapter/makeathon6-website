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

export const cantebutry = localFont({
  src: '../../public/fonts/Canterbury.ttf',
  display: 'swap',
})

// export const juraFont = Jura