import { useState, useEffect } from 'react';
import Article from 'components/Article';
import { useRouter } from 'next/router';
import search from '../../search.json' assert { type: 'json' };
import SelectField from 'components/form/SelectField';
import TextField from 'components/form/TextField';
import Button from 'components/form/Button';

const tags = [...new Set(search.flatMap((e) => e.tags))];

const filter = (q: string, tags: string[]) => {
  if (!q && !tags.length) {
    return search;
  }

  return search.filter(
    (e) =>
      (q && e.title?.includes(q)) || tags.some((tag) => e.tags?.includes(tag))
  );
};

const Filter = () => {
  const {
    query: { q, tag },
    replace,
  } = useRouter();

  const [q1, setQ] = useState(q && !Array.isArray(q) ? q : '');
  const [tag1, setTag] = useState(tag && !Array.isArray(tag) ? tag : '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    replace({ query: { q: q1, tag: tag1 } });
  };

  useEffect(() => {
    setQ(q && !Array.isArray(q) ? q : '');
    setTag(tag && !Array.isArray(tag) ? tag : '');
  }, [q, tag]);

  return (
    <form onSubmit={handleSubmit}>
      Search: <TextField value={q1} onChange={setQ} />
      Tags: <SelectField value={tag1} options={tags} onChange={setTag} />
      <Button type="submit">search</Button>
    </form>
  );
};

const Results = ({ items }: any) => {
  return (
    <div className="grid gap-4">
      {items.map((item: any) => (
        <Article key={item.path} {...item} />
      ))}
    </div>
  );
};

export default function Search() {
  const {
    query: { q, tag },
  } = useRouter();

  const result = filter(
    q && !Array.isArray(q) ? q : '',
    tag && !Array.isArray(tag) ? [tag] : []
  );

  return (
    <>
      <Filter />
      <div className="pt-4">
        {!result.length ? 'No results' : <Results items={result} />}
      </div>
    </>
  );
}
