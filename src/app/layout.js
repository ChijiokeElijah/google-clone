import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next Js 13',
  description: 'Google clone created by NEXT js 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        
        {children}
        
        {/* Footer */}
        <Footer />
        </body>
    </html>
  )
}
