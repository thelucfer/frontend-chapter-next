import Link from 'next/link';
import styles from './Nav.module.css';

export const Nav = ({
  links,
}: {
  links: Array<{ title: string; href: string }>;
}) => {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.title} className={styles.item}>
            <Link href={link.href} className={styles.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
