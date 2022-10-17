import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const { query, replace } = useRouter();

  const [q, setQ] = useState(query.q || '');

  useEffect(() => {
    setQ(query.q || '');
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

  return (
    <header className="flex flex-row py-4 px-4 shadow">
      <div className="flex-1">{/* <ul>Breadcrumb &gt;</ul> */}</div>
      <div className="">
        <form>
          <label htmlFor="search" className="mr-2">
            Serach:
          </label>
          <input
            id="search"
            type="search"
            className="border"
            value={q}
            onChange={handleChange}
          />
        </form>
      </div>
    </header>
  );
};

export default Header;
