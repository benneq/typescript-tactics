import Link from 'next/link';
import { join } from 'utils/react';
import Collapse from './layout/Collapse';
import Tag from './Tag';

type Props = {
  title: string;
  tags: string[];
  path: string;
};

export default function Article({ title, tags, path }: Props) {
  return (
    <Collapse title={title}>
      <div className="flex flex-col">
        <div>
          Path: <Link href={{ pathname: path }}>{path}</Link>
        </div>
        <div>
          Tags:{' '}
          {join(
            tags.map((tag) => <Tag key={tag} value={tag} />),
            ', '
          )}
        </div>
      </div>
    </Collapse>
  );
}
