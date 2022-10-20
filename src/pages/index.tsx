import { GetStaticProps, InferGetStaticPropsType } from 'next';
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';
import Article from 'components/Article';
import { getFilesRecursive } from 'utils/file';

interface Meta {
  slug: string;
  path: string;
  title: string;
  tags: string[];
}

export const getStaticProps: GetStaticProps<{
  articles: Meta[];
}> = async () => {
  const files = getFilesRecursive('src/pages');

  const articles = files
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
    .filter((article) => article.title && article.tags.length);

  const jsonString = JSON.stringify(articles);
  fs.writeFileSync('./search.json', jsonString);

  return { props: { articles: articles } };
};

export default function Home({
  articles: artciles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {artciles.map((article) => (
        <div key={article.path}>
          <Article {...article} />
        </div>
      ))}
    </>
  );
}
