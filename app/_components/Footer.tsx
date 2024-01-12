import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Link href="/parrot-two" className={styles.unsuspiciousLink}>
        this is a footer, trust me
      </Link>
    </footer>
  );
};
