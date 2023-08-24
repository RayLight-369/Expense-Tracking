import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Expense Tracker',
  description: 'Keep Track of Your Expenses.',
  icons: {
    icon: "/favico.ico"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href="/favico.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
