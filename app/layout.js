import './globals.css'
import App from './app';

export const metadata = {
  title: 'Makeathon 6',
  description: 'The official Makeathon website',
}

export default function RootLayout({ children }) {
  return <App>{children}</App>;
}

