import { Inter } from 'next/font/google'
import { ThemeProvider } from './context/ThemeContext'
// import CV from "./components/CV"
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KarpDev',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          {/* <CV/> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
