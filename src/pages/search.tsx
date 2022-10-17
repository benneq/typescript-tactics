import Post from 'components/Post';
import { useRouter } from 'next/router';
import search from '../../search.json' assert { type: 'json' };

const filter = (q: string, tag: string) => {
  if (!q && !tag) {
    return search;
  }

  return search.filter(
    (e) =>
      (q && (e.slug.includes(q) || e.title?.includes(q))) ||
      (tag && e.tags?.includes(tag))
  );
};

export default function Search() {
  const {
    query: { q, tag },
  } = useRouter();

  const result = filter(
    q && !Array.isArray(q) ? q : '',
    tag && !Array.isArray(tag) ? tag : ''
  );

  return (
    <>
      {!result.length && 'No results'}

      {result.map((post) => (
        <div key={post.slug}>
          <Post {...post} />
        </div>
      ))}
    </>
  );
}
