import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const { query, replace } = useRouter();

  const [q, setQ] = useState(query.q && !Array.isArray(query.q) ? query.q : '');

  useEffect(() => {
    setQ(query.q && !Array.isArray(query.q) ? query.q : '');
  }, [query.q]);

  const timeout = useRef<NodeJS.Timeout>();

  const runTimeout = (q: string, ms: number) => {
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      replace({ pathname: '/search', query: { q } }, undefined, {
        shallow: true,
      });
    }, ms);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQ(value);
    runTimeout(value, 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runTimeout(q, 0);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="peer -mr-[8rem] w-full rounded-lg border p-1 pl-8 transition-[margin-right] focus:-mr-0 focus:outline-offset-2 [&:not(:placeholder-shown)]:-mr-0"
        value={q}
        onChange={handleChange}
      />
      <svg
        aria-hidden="true"
        className="absolute top-1 left-1 h-6 w-6 peer-focus:stroke-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </form>
  );
};

export default SearchBox;
