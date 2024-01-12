import Link from 'next/link';
import { Presentation } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import styles from './PresentationCard.module.css';

export const PresentationCard = ({
  presentation,
}: {
  presentation: Presentation;
}) => {
  return (
    <Link
      href={`/presentations/${presentation.slug}`}
      className={styles.wrapper}
    >
      <h2 className={styles.title}>{presentation.title}</h2>
      <h3 className={styles.author}>{presentation.author}</h3>
      <time className={styles.date} dateTime={presentation.date}>
        {formatDate(presentation.date)}
      </time>
      <p className={styles.description}>{presentation.description}</p>
    </Link>
  );
};
