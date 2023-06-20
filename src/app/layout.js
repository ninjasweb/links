import './reset.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ninjasweb Links',
  description: 'Soluciones de Software a medida.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
