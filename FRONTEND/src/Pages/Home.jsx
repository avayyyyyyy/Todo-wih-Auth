import { Link } from "react-router-dom";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="w-screen h-[100vh] flex justify-center items-center gap-4 flex-col">
        <h1 className="text-8xl font-bold">MERN - AUTH</h1>
        <div className="flex gap-4 text-2xl">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
