import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NASA Mars Exploration Program',
  description: 'The NASA Mars Exploration Program is a science-driven program that seeks to understand whether Mars was, is, or can be, a habitable world.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: roboto.style.fontFamily }}>{children}</body>
    </html>
  );
}
