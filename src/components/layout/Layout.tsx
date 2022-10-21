import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from './Header';
import Menu from './Menu';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-row">
      <aside className="flex w-64 min-w-max flex-col gap-2 pl-2 pr-2 pt-1 shadow">
        <Link href="/">
          <a className="text-center text-2xl font-bold">TypeScript Tactics</a>
        </Link>
        <Menu />
      </aside>
      <div className="flex min-w-0 flex-grow flex-col">
        <Header />
        <main className="px-8 pt-4">{children}</main>
      </div>
    </div>
  );
}
