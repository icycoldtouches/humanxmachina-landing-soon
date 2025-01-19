import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              humanXmachina
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;