import Tag from './Tag';

type Props = {
  slug: string;
  title: string;
  tags: string[];
};

export default function Post({ slug, title, tags = [] }: Props) {
  return (
    <details>
      <summary>{title}</summary>
      Tags:
      {tags.map((tag, i) => [i > 0 && ', ', <Tag key={tag} value={tag} />])}
    </details>
  );
}
