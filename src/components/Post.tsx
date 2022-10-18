import Link from 'next/link';
import Tag from './Tag';

type Props = {
  slug: string;
  title: string;
  tags: string[];
  path: string;
};

export default function Post({ slug, title, tags, path }: Props) {
  return (
    <details open className="border shadow">
      <summary className="cursor-pointer">{title}</summary>
      <div className="flex flex-col">
        <div>Slug: {slug}</div>
        <div>
          Path: <Link href={{ pathname: path }}>{path}</Link>
        </div>
        <div>
          Tags:{' '}
          {tags.map((tag, i) => [i > 0 && ', ', <Tag key={tag} value={tag} />])}
        </div>
      </div>
    </details>
  );
}
