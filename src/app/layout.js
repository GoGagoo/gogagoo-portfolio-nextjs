import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  openGraph: {
    title: 'Gagik Antonyan aKa GoGagoo',
    description: 'Gagik Antonyan is a frontend web developer specializing in JavaScript.',
    url: 'https://gogagoo-portfolio.vercel.app',
    images: [
      {
        url: 'https://i.postimg.cc/X7vr0Q53/67shots-so.jpg'
      }
    ]
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scrollable' data-lt-installed="true">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
