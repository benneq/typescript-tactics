import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ReactKeyboardEventHTMLInputElement } from 'utils/react';
import {
  cancel,
  delay,
  now,
  useDebounceCallback,
} from 'hooks/useDebounceCallback';
import MagGlass from 'components/icon/MagGlass';

const SearchBox = () => {
  const { query, replace } = useRouter();

  const [q, setQ] = useState(
    query['q'] && !Array.isArray(query['q']) ? query['q'] : ''
  );

  const debounce = useDebounceCallback((q: string) => {
    replace({ pathname: '/search', query: { q } }, undefined, {
      shallow: true,
    });
  });

  useEffect(() => {
    setQ(query['q'] && !Array.isArray(query['q']) ? query['q'] : '');
  }, [query['q']]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQ(value);
    debounce(delay(500, value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    debounce(now(q));
  };

  const handleKeyDown = (e: ReactKeyboardEventHTMLInputElement) => {
    if (e.key === 'Escape') {
      debounce(cancel);
      setQ('');
      e.target.blur();
    }
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
        onKeyDown={handleKeyDown}
      />
      <MagGlass className="absolute top-1 left-1 h-6 w-6 peer-focus:stroke-gray-400" />
    </form>
  );
};

export default SearchBox;
