const Header = () => (
  <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <h1 className="text-2xl font-bold">Stock Market App</h1>
    <nav>
      <ul className="flex gap-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/portfolio" className="hover:underline">
            Portfolio
          </a>
        </li>
        <li>
          <a href="/watchlist" className="hover:underline">
            Watchlist
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
