import { useState } from 'react';
import Link from 'next/link';
import Chevron from 'components/icon/Chevron';

type Item = {
  title: string;
  href: string;
  children: Item[];
};

const item = (title: string, href: string, children: Item[] = []): Item => {
  return {
    title,
    href,
    children,
  };
};

const items = [
  item('Array', '/array', [item('nth', '/array/nth')]),
  item('Config', '/config', [item('tsconfig.json', '/config/tsconfig-json')]),
  item('Function', '/function', [
    item('Arguments', '/function/arguments'),
    item('Overloading', '/function/overloading'),
  ]),
  item('Exclude', '/exclude', [item('Filter', '/exclude/filter')]),
  item('Type', '/type', [item('Guard', '/type/guard')]),
  item('String', '/string', [item('Sanitize', '/string/sanitize')]),
  item('React', '/react', [item('Generics', '/react/generics')]),
];

const MenuItem = ({ title, href, children }: Item) => {
  const [showChildren, setShowChildren] = useState(children.length > 0);

  const handleClick = () => {
    setShowChildren((show) => !show);
  };

  return (
    <li className="w-full">
      <span className="flex">
        <Link href={href}>
          <a className="flex-1 hover:underline">{title}</a>
        </Link>
        {children.length > 0 && (
          <button className="rounded" onClick={handleClick}>
            <Chevron
              className={`h-6 w-6 transition-all ${
                showChildren ? 'rotate-180' : ''
              }`}
            />
          </button>
        )}
      </span>

      <ul className={`flex flex-col pl-2 ${showChildren ? '' : 'hidden'}`}>
        {children.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </ul>
    </li>
  );
};

export default function Menu() {
  return (
    <nav>
      <ul>
        {items.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </ul>
    </nav>
  );
}
