import Sidebar from '@/components/Sidebar';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Spotify Clone with API',
  description: 'Spotify Clone | Home',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar>
          {children}
          <Analytics />
        </Sidebar>
      </body>
    </html>
  );
}
