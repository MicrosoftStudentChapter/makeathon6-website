
import './globals.css'

export const metadata = {
  title: 'Makeathon 6',
  description: 'The official Makeathon website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
