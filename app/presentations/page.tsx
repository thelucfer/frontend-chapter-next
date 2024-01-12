import { sql } from '@vercel/postgres';
import { Presentation } from '@/lib/types';
import { PresentationCard } from './_components/PresentationCard';
import styles from './presentation.module.css';

export default async function PresentationPage() {
  const { rows }: { rows: Array<Presentation> } =
    await sql`SELECT * from presentations`;

  return (
    <div className={styles.wrapper}>
      {rows.map((presentation) => (
        <PresentationCard key={presentation.slug} presentation={presentation} />
      ))}
    </div>
  );
}
