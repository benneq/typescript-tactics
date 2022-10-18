import Link from 'next/link';
import { useState } from 'react';

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
  item('Function', '/function', [item('Overloading', '/function/overloading')]),
  item('Exclude', '/exclude', [item('Filter', '/exclude/filter')]),
  item('Type', '/type', [item('Guard', '/type/guard')]),
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
          <a className="flex-1">{title}</a>
        </Link>
        {children.length > 0 && (
          <button className="rounded" onClick={handleClick}>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </span>

      <ul className={`flex list-inside pl-4 ${showChildren ? '' : 'hidden'}`}>
        {children.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </ul>
    </li>
  );
};

export default function Menu() {
  return (
    <ul className="list-inside">
      {items.map((item, i) => (
        <MenuItem key={i} {...item} />
      ))}
    </ul>
  );
}
