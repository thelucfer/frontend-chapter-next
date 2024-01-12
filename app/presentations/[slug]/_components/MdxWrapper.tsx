'use client';

import { MDXProvider } from '@mdx-js/react';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

export const MdxWrapper = ({
  source,
}: {
  source: MDXRemoteSerializeResult;
}) => {
  return (
    <MDXProvider>
      <MDXRemote {...source} />
    </MDXProvider>
  );
};
