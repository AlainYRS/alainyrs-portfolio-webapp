import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Alain Portfolio Webapp',
  description: 'Developed by Alain with React Next.js Typescript, TailwindCSS, Power BI, Cloud Firestore and more.',
  authors: [{
    name: 'Alain Y Rivera S',
    url: 'https://www.alainwebportfolio.app'
  }],
  applicationName: 'Alain Y Rivera S Portfolio WebApp',
  keywords: ['Alain','Portfolio','Webapp','Resume','Skills','Experience','Repositories'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'Business Technology',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  colorScheme: 'dark',
  creator: 'Alain Rivera',
  publisher: 'Alain Rivera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  other: {
    custom: 'meta',
  },
  manifest: 'https://nextjs.org/manifest.json',
  icons: {
    icon: [
      '@/public/Icons/AYRSicon.png',
    ],
    apple: [
      '@/public/Icons/AYRSicon.png',
    ]
  },
}

export default function RootLayout({children}: Props ) {

  return (
    <>
      <html>
        <body className={(inter.className, "bg-gray-900 text-white")}>
          {children}
        </body>
      </html>
    </>
  )
}
