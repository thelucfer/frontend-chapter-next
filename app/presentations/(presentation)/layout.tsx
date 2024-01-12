'use client';

import { usePathname } from 'next/navigation';
import * as R from 'remeda';
import p from '@/lib/metadata/presentations.json';
import { Presentation } from '@/lib/types';
import { PageControls } from './_components/PageControls';
import styles from './MdxLayout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const numPages = R.pipe(
    [
      p.presentations satisfies Array<Presentation>,
      pathname.split('/')[2],
    ] as const,
    ([presentations, presentationSlug]) =>
      R.find(presentations, (x) => x.slug === presentationSlug),
    (x) => (x ? x.length : 1),
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>{children}</div>
      <footer className={styles.controls}>
        <PageControls numPages={numPages} />
      </footer>
    </div>
  );
}
