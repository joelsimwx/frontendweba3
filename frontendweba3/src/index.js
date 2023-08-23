import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewHome from "./Components/NewHome";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Contact from "./Components/Contact";
import Adoption from "./Components/Adoption";
import Layout from "./Components/Layout";
import SuccessPage from "./Components/SuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Adoption" element={<Adoption />} />
          <Route path="NewHome" element={<NewHome />} />
          <Route path="contact" element={<Contact />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SuccessPage" element={<SuccessPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
