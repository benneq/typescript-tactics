import { useRouter } from 'next/router';
import { ReactKeyboardEventHTMLInputElement } from 'utils/react';
import {
  cancel,
  delay,
  now,
  useDebounceCallback,
} from 'hooks/useDebounceCallback';
import MagGlass from 'components/icon/MagGlass';
import { useCallback } from 'react';
import { useRef } from 'react';

const SearchBox = () => {
  const { replace } = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const executeSearch = useCallback(() => {
    replace({ pathname: '/search', query: { q: inputRef.current?.value } });
  }, []);

  const debounce = useDebounceCallback(executeSearch);

  const handleChange = () => {
    debounce(delay(500));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputRef.current) {
      debounce(now());
    }
  };

  const handleKeyDown = (e: ReactKeyboardEventHTMLInputElement) => {
    if (e.key === 'Escape') {
      debounce(cancel);
      e.target.value = '';
      e.target.blur();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        ref={inputRef}
        id="search"
        type="search"
        placeholder="Search"
        className="peer -mr-[7rem] w-full rounded-lg border p-1 pl-8 text-slate-500 transition-[margin-right] focus:-mr-0 focus:text-black focus:outline-offset-2"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <label
        className="absolute top-1.5 left-1.5 h-5 w-5 cursor-pointer peer-focus:text-slate-500"
        htmlFor="search"
      >
        <MagGlass />
      </label>
    </form>
  );
};

export default SearchBox;
