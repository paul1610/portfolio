import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navigation from "@/app/en/components/navbar/Navigation";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nell Paul',
  description: 'Nell Pauls Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Navigation />
            {children}
        </body>
    </html>
  );
}