// @ts-check

import pkg from './package.json' assert { type: 'json' };
import VERSION from './scripts/compute-version.js';
import bundleAnalyzer from '@next/bundle-analyzer';
import remarkFrontmatter from 'remark-frontmatter';
import rehypePrism from 'rehype-prism-plus';
import mdx from '@next/mdx';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter],
    rehypePlugins: [rehypePrism],
    providerImportSource: '@mdx-js/react',
  },
});

const version = String(VERSION);

console.log(`\n\nRunning version: ${version}\n`);

const isProduction = 'production' === `${process.env.NODE_ENV}`;

const basePath = isProduction ? `/${pkg.name}` : '';

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    reactRemoveProperties: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  basePath,
  env: {
    ASSETS_PREFIX: basePath,
    VERSION: version,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
};

export default withMDX(withBundleAnalyzer(nextConfig));
