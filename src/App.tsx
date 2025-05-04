import HomePage from "./pages/HomePage";
import { HashRouter as Router, Routes, Route } from "react-router";
import Login from "./pages/Login";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/LoginPage" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
