import HomePage from "./pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          {" "}
          <Route path="/LoginPage" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
