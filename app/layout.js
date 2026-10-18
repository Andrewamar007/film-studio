import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Video Marketplace',
  description: 'Buy premium video courses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
