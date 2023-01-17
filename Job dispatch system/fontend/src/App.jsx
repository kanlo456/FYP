import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import NormalUserPage from "./pages/NormalUserPage";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  { path: "UserPage", element: <NormalUserPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
  // <Routes>
  //   <Route path="/" element={<AuthPage />} />
  //   <Route path="/UserPage" element={<NormalUserPage />} />
  //   <Route path="/AdminUserPage" element={<AdminUserPage />} />
  // </Routes>
}

export default App;
