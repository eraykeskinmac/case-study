// app/layout.tsx

import { Inter as FontSans } from 'next/font/google';

import type { Metadata } from 'next';

import './globals.css';

import Navbar from '@/components/navbar';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Case Study',
  description: 'Case Study',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-[#F3F3F3] font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Navbar>
          <main className="flex flex-1 flex-col gap-4 lg:gap-6">
            {children}
          </main>
        </Navbar>
      </body>
    </html>
  );
}
