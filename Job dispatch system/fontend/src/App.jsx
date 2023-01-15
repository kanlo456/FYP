import { Route, Routes } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NormalUserPage from "./pages/NormalUserPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/UserPage" element={<NormalUserPage />} />
    </Routes>
  );
}

export default App;
