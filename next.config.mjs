/**
 * @typedef {import('next').NextConfig} NextConfig
 * @typedef {Array<((config: NextConfig) => NextConfig)>} NextConfigPlugins
 */
import nextMDX from '@next/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';

/** @type {NextConfigPlugins} */
const plugins = [];

/** @type {NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
  theme: 'one-dark-pro',
};

plugins.push(
  nextMDX({
    extension: /\.mdx?$/,
    options: {
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [],
      rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
    },
  }),
);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => plugins.reduce((_, plugin) => plugin(_), nextConfig);
