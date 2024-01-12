import Image from 'next/image';
import Link from 'next/link';
import ecoreLogo from '@/lib/assets/logo-ecore.png';
import styles from './Header.module.css';
import { Nav } from './Nav';

const links = [
  {
    title: 'home',
    href: '/',
  },
  {
    title: 'presentations',
    href: '/presentations',
  },
  {
    title: 'parrot',
    href: '/parrot',
  },
];

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.pageTitle}>
        <Link href="/" className={styles.link}>
          frontend chapter
        </Link>
      </h1>
      <Nav links={links} />
      <Image src={ecoreLogo} alt={'logo da ecore'} className={styles.logo} />
    </header>
  );
};
