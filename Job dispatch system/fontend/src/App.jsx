import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminUserPage from "./pages/AdminUserPage";
import AuthPage from "./pages/AuthPage";

const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  { path: "UserPage", element: <AdminUserPage /> },
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
