import "./App.css";

import Home from "./pages/Home";

import ContactPage from "./pages/ContactPage";

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
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
        {/* <Test /> */}
      </div>
    </Router>
  );
}

export default App;
