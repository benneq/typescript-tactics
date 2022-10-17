import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import Post from 'components/Post';

interface Meta {
  slug: string;
  title: string;
  tags: string[];
}

export const getStaticProps: GetStaticProps<{ posts: Meta[] }> = async () => {
  const filenames = fs.readdirSync(path.join('src', 'posts'));

  const posts = filenames.map((filename) => {
    const slug = filename.replace('.mdx', '');
    const file = fs.readFileSync(path.join('src', 'posts', filename), 'utf-8');
    const { data } = grayMatter(file);
    return {
      slug,
      title: data.title || '',
      tags: data.tags || [],
    };
  });

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
