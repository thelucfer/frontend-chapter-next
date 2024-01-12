'use client';

import styles from './MdxLayout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className={styles.wrapper}>{children}</div>;
}
