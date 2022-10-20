import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import Post from 'components/Post';
import { getFilesRecursive } from 'utils/file';

interface Meta {
  slug: string;
  path: string;
  title: string;
  tags: string[];
}

export const getStaticProps: GetStaticProps<{ posts: Meta[] }> = async () => {
  const files = getFilesRecursive('src/pages');

  const posts = files
    .map((filepath) => {
      const file = fs.readFileSync(path.normalize(filepath), 'utf-8');

      const { data } = grayMatter(file);
      return {
        slug: filepath,
        title: data['title'] || '',
        tags: data['tags'] || [],
        path: filepath
          .replaceAll('src/pages', '')
          .replaceAll('.mdx', '')
          .replaceAll('/index', ''),
      };
    })
    .filter((post) => post.title && post.tags.length);

  const jsonString = JSON.stringify(posts);
  fs.writeFileSync('./search.json', jsonString);

  return { props: { posts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.path}>
          <Post {...post} />
        </div>
      ))}
    </>
  );
}
