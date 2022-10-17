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
      <aside className="w-64 pl-2 pr-2 pt-1 md:shadow">
        <Link href="/">
          <a className="text-2xl font-bold">TypeScript Tactics</a>
        </Link>
        <Menu />
      </aside>
      <main className="flex flex-grow flex-col">
        <Header />
        {children}
      </main>
    </div>
  );
}
