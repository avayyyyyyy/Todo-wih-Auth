import axios from "axios";
import { useState } from "react";
import Header from "../Components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((res) => {
        let { redirect } = res.data;
        window.location.href = redirect;
      });
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <Header />
      <div className="w-screen h-[100vh] flex justify-center items-center flex-col gap-8">
        <h1 className="text-8xl font-bold">Login Here!</h1>
        <form
          action=""
          method=""
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-2 "
        >
          <input
            className="p-3 rounded-md"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            placeholder="email"
          />
          <input
            className="p-3 rounded-md"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            placeholder="password"
          />
          <button
            onClick={() => {
              console.log("Data Submitted");
            }}
            className="border-white"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
