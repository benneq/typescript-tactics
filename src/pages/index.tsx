import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import Post from 'components/Post';

interface Meta {
  slug: string;
  path: string;
  title: string;
  tags: string[];
}

export const getStaticProps: GetStaticProps<{ posts: Meta[] }> = async () => {
  const dir = path.join('src', 'pages', 'exclude');

  const filenames = fs.readdirSync(dir);

  const posts = filenames
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const file = fs.readFileSync(path.join(dir, filename), 'utf-8');

      const { data } = grayMatter(file);
      return {
        slug,
        title: data.title || '',
        tags: data.tags || [],
        path: path.join('/exclude', slug).replaceAll('\\', '/'),
      };
    })
    .filter((post): post is Meta => post !== null);

  const jsonString = JSON.stringify(posts);
  fs.writeFileSync('./search.json', jsonString);

  return { props: { posts: posts } };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('P', posts);

  return (
    <>
      {posts.map((post) => (
        <div key={post.slug}>
          <Post {...post} />
        </div>
      ))}
    </>
  );
}
