import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header className="flex flex-row py-4 px-4 shadow">
      <div className="flex-1">{/* <ul>Breadcrumb &gt;</ul> */}</div>
      <SearchBox />
    </header>
  );
};

export default Header;
