import { Inter } from 'next/font/google'
import Script from 'next/script'

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RQE6LR9WSP"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RQE6LR9WSP');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
