import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminUserPage from "./pages/AdminUserPage";
import AuthPage from "./pages/AuthPage";
import { ColorModeContext, useMode } from "../src/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";


const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
  { path: "UserPage", element: <AdminUserPage /> },
]);

function App() {
  const [theme, colorMode] = useMode();
  return (<RouterProvider router={router} />
      );
  // <Routes>
  //   <Route path="/" element={<AuthPage />} />
  //   <Route path="/UserPage" element={<NormalUserPage />} />
  //   <Route path="/AdminUserPage" element={<AdminUserPage />} />
  // </Routes>
}

export default App;
