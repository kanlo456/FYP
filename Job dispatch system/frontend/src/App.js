import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { Error } from "./pages/Error";
// pages & components
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
// import SignupCust from './pages/SignupCust'
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import { Dashboard } from "./pages/Dashboard";
import Ticket from "./pages/Ticket";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import Layout from "./layout/Layout";
import Ticketboartd from "./pages/Ticketboard/Ticketboard";
import EditTicket from "./pages/EditTicket";
import CreateTicket from "./pages/CreateTicket/CreateTicket";

function App() {
  const { user } = useAuthContext();
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
      errorElement: <Error />,
    },
    {
      path: "login",
      element: <LoginPage />,
      errorElement: <Error />,
    },
    {
      path: "signUp",
      element: <SignUpPage />,
    },
    {
      path: "insert",
      element: <Ticket />,
    },
    {
      path: "dashboard",
      element: <Layout />,
      children: [
        { path: "ticketboard", element: <Ticketboartd /> },
        { path: "editTicket/:id", element: <EditTicket /> },
        { path: "createTicket", element: <CreateTicket /> },
      ],
    },
    { path: "editTicket/:id", element: <EditTicket /> },
  ]);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
      {/* <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={user ? <Home /> :<Navigate to="/login"/>}
            />
            <Route 
              path="/login"
              element={!user ? <Login /> :<Navigate to="/"/>}
            />
            <Route 
              path="/Signup"
              element={!user ? <Signup /> :<Navigate to="/"/>}
            />

          </Routes>
        </div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
