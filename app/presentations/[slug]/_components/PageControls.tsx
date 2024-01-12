'use client';

import { usePathname, useRouter } from 'next/navigation';
import * as R from 'remeda';
import styles from './PageControls.module.css';

export const PageControls = ({
  numPages,
  presentationSlug,
}: {
  numPages: number;
  presentationSlug: string;
}) => {
  const pathname = usePathname();
  const { push } = useRouter();

  const currentPage = R.pipe(pathname.split('/'), (x) =>
    x.length === 4 ? Number(x[3]) : 0,
  );

  if (numPages === 0) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => {
          if (currentPage === 1) {
            push(`/presentations/${presentationSlug}`);
            return;
          }

          push(`/presentations/${presentationSlug}/${currentPage - 1}`);
        }}
        disabled={currentPage === 0}
      >
        {`<`}
      </button>
      <span>{currentPage}</span>
      <button
        type="button"
        onClick={() => {
          push(`/presentations/${presentationSlug}/${currentPage + 1}`);
        }}
        disabled={currentPage === numPages - 1}
      >
        {`>`}
      </button>
    </div>
  );
};
