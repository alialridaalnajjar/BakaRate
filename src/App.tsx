import HomePage from "./pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CantLoginPage from "./pages/CantLoginPage";
import AnimePage from "./pages/AnimePage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/CantLoginPage" element={<CantLoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/AnimePage/:title" element={<AnimePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
