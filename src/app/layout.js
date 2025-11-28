// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eloise Youmbi Portfolio',
  description: 'Creative Portfolio of Eloise Youmbi, a Frontend Developer and Designer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body 
        className={`${inter.className} min-h-screen bg-inherit`}
      >
        {children}
      </body>
    </html>
  )
}