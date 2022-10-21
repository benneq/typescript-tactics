import Breadcrumb from './Breadcrumb';
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header className="flex flex-row flex-nowrap py-4 px-4 shadow">
      <nav
        id="breadcrumb"
        className="min-w-0 flex-1 self-center truncate pr-4 text-left"
        style={{ direction: 'rtl' }}
      >
        <Breadcrumb>
          {[1, 2, 3, 4].map((i) => (
            <a key={i} className="hover:underline" href="#">
              Breadcrumb {i}
            </a>
          ))}
        </Breadcrumb>
      </nav>
      <SearchBox />
    </header>
  );
};

export default Header;
