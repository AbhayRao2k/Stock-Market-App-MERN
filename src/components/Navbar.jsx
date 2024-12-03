import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-lg font-bold">Stock Market App</h1>
        <div className="flex gap-4">
          <NavLink to="/" className="px-4 py-2 hover:bg-secondary rounded-md">
            Home
          </NavLink>
          <NavLink to="/portfolio" className="px-4 py-2 hover:bg-secondary rounded-md">
            Portfolio
          </NavLink>
          <NavLink to="/watchlist" className="px-4 py-2 hover:bg-secondary rounded-md">
            Watchlist
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
