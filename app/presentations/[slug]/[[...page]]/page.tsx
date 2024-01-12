import { sql } from '@vercel/postgres';
import fs from 'fs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import { Presentation } from '@/lib/types';
import { PageControls } from '../_components/PageControls';
import styles from './PresentationPage.module.css';

export default async function PresentationPage({
  params,
}: {
  params: { slug: string; page?: string };
}) {
  const {
    rows: [presentation],
  }: { rows: Array<Presentation> } =
    await sql`SELECT * from presentations where slug = ${params.slug}`;

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className={styles.content}>
        <MDXRemote
          source={fs.readFileSync(
            `presentations/${params.slug}/${params?.page ?? 0}.mdx`,
          )}
        />
      </div>
      <footer className={styles.controls}>
        <PageControls
          numPages={presentation.length}
          presentationSlug={presentation.slug}
        />
      </footer>
    </Suspense>
  );
}
