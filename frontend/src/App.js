import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NewSharyi from "./components/newShayri/NewSharyi";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Sharyi from "./components/Sharyi/Sharyi";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route excat path="/" element={<HomePage />}></Route>
        <Route
          path="/AddSharyi"
          element={<NewSharyi heading="Write Sher" />}
        ></Route>
        <Route path="/Sharyi" element={<Sharyi />}></Route>
        <Route path="/Sharyi/edit/:id" element={<NewSharyi />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
