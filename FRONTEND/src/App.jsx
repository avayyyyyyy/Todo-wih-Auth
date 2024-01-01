import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import TodoApp from "./Pages/TodoApp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/todo" element={<TodoApp />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
