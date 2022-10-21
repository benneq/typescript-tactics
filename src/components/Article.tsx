import Link from 'next/link';
import Collapse from './layout/Collapse';
import Tag from './Tag';

type Props = {
  slug: string;
  title: string;
  tags: string[];
  path: string;
};

export default function Article({ slug, title, tags, path }: Props) {
  return (
    <Collapse title={title}>
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
    </Collapse>
  );
}
