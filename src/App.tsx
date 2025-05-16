import { Route, Routes } from "react-router";
import AnimePage from "./pages/AnimePage";
import CantLoginPage from "./pages/CantLoginPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Profile from "./pages/Profile";
import SignUpPage from "./pages/SignUpPage";
function App() {
  return (
    <div>
    
        <Routes>
          <Route path="/Profile" element={<Profile />} />
          <Route path="/CantLoginPage" element={<CantLoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/AnimePage/:title" element={<AnimePage />} />
        </Routes>
     
    </div>
  );
}

export default App;
