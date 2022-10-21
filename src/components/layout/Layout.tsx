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
      <aside className="flex w-64 flex-col gap-2 pl-2 pr-2 pt-1 shadow">
        <div className="text-center text-2xl font-bold">
          <Link href="/">TypeScript Tactics</Link>
        </div>
        <Menu />
      </aside>
      <div className="flex flex-grow flex-col">
        <Header />
        <main className="px-8 pt-4">{children}</main>
      </div>
    </div>
  );
}
