import './../globals.css'
import { Inter } from 'next/font/google'
import SearchHeader from '@/components/SearchHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone Next Js 13',
  description: 'Google clone created by NEXT js 13',
}

export default function SearchLayout({ children }) {
  return (
    <div>
      <body className={inter.className}>
        <SearchHeader/>
        
        {children}
        

        </body>
        </div>
  )
}
