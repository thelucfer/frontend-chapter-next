import p from '@/lib/metadata/presentations.json';
import { Presentation } from '@/lib/types';
import { PresentationCard } from './_components/PresentationCard';
import styles from './presentation.module.css';

export default function PresentationPage() {
  return (
    <div className={styles.wrapper}>
      {(p.presentations satisfies Array<Presentation>).map((presentation) => (
        <PresentationCard key={presentation.slug} presentation={presentation} />
      ))}
    </div>
  );
}
