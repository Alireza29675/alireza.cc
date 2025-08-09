import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Alireza Sheikholmolouki',
  description:
    'Making online collaboration intuitive at Miro | Software Engineer | Generative Arts Enthusiast | Amsterdam',
  keywords: [
    'Miro',
    'online collaboration',
    'software engineer',
    'generative arts',
    'creative coding',
    'Amsterdam',
    'portfolio',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
