import { BrowserRouter, Route, HashRouter as Router, Routes } from "react-router";
import AnimePage from "./pages/AnimePage";
import CantLoginPage from "./pages/CantLoginPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <div>
      <BrowserRouter basename="/BakaRate/">
      <Router>
        <Routes>
          <Route path="/CantLoginPage" element={<CantLoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/AnimePage/:title" element={<AnimePage />} />
        </Routes>
      </Router></BrowserRouter>
    </div>
  );
}

export default App;
