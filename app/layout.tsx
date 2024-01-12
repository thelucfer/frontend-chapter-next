import '@/lib/styles/main.css';
import { clsx } from 'clsx';
import type { Metadata } from 'next';
import { Barlow, Open_Sans } from 'next/font/google';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import styles from './layout.module.css';

const openSans = Open_Sans({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-primary',
});

const barlow = Barlow({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary',
});

export const metadata: Metadata = {
  title: 'e-Core Frontend Chapter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx([openSans.variable, barlow.variable])}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
