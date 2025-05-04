import HomePage from "./pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CantLoginPage from "./pages/CantLoginPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/CantLoginPage" element={<CantLoginPage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
