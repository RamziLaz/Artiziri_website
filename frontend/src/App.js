import logo from "./logo.svg";
import "./App.css";
import Header from "./Header/Header";
import Header2 from "./Header2/Header2";
import Home from "./pages/Home";
import About from "./About/About";
import Features from "./Features/Features";
import Artiziri from "./Artiziri/Artiziri";
import Team from "./Team/Team";
import ContactPage from "./pages/ContactPage";
import Test from "./Popup/test";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        {/* <Test /> */}
      </div>
    </Router>
  );
}

export default App;
