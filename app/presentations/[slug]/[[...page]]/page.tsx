import { sql } from '@vercel/postgres';
import fs from 'fs';
import { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Suspense } from 'react';
import rehypePrettyCode from 'rehype-pretty-code';
import { Presentation } from '@/lib/types';
import { PageControls } from '../_components/PageControls';
import styles from './PresentationPage.module.css';

const baseComponents: MDXComponents = {
  img: (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      {...(props as ImageProps)}
    />
  ),
};

export default async function PresentationPage({
  params,
}: {
  params: { slug: string; page?: string };
}) {
  const {
    rows: [presentation],
  }: { rows: Array<Presentation> } =
    await sql`SELECT * from presentations where slug = ${params.slug}`;

  const { components } = await import(
    `@/presentations/${params.slug}/_components`
  );

  return (
    <Suspense fallback={<>Loading...</>}>
      <div className={styles.content}>
        <MDXRemote
          source={fs.readFileSync(
            `presentations/${params.slug}/${params?.page ?? 0}.mdx`,
          )}
          options={{
            mdxOptions: {
              rehypePlugins: [
                // https://github.com/atomiks/rehype-pretty-code/issues/145
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                [rehypePrettyCode, { theme: 'one-dark-pro' }] as any,
              ],
            },
          }}
          components={{ ...baseComponents, ...(components as MDXComponents) }}
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
