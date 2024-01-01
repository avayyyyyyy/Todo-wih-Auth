import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-6 bg-zinc-600 py-4 w-screen top-0 absolute items-center">
      <Link to="/" className="text-xl font-bold text-white">
        MERN - AUTH
      </Link>
      <div className="flex gap-3">
        <Link className="text-white" to="/login">
          Login
        </Link>
        <Link className="text-white" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Header;
