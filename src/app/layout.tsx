import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from "@/hooks/ThemeContext";

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Red Planet',
  description: 'Explore Mars with NASA\'s latest data and images',
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
      <body style={{ fontFamily: roboto.style.fontFamily }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
