import { Link } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl">College Booking</Link>
        <div>
          <Link to="/colleges" className="mr-4">Colleges</Link>
          <Link to="/admission" className="mr-4">Admission</Link>
          {user ? (
            <>
              <Link to="/my-college" className="mr-4">My College</Link>
              <Link to="/profile" className="mr-4">Profile</Link>
              <button onClick={logout} className="text-red-500">Logout</button>
            </>
          ) : (
            <Link to="/login" className="text-blue-500">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
