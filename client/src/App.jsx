import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import "./index.css";
import SideBar from "./components/SideBar.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="flex h-[92.5vh]">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
