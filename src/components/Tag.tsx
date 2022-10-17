import Link from 'next/link';

type Props = {
  value: string;
};

export default function Tag({ value }: Props) {
  return (
    <Link href={{ pathname: '/search', query: { tag: value } }}>{value}</Link>
  );
}
