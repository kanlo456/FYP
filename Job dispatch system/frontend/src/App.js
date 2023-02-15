import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { Error } from "./pages/Error";
// pages & components
import LoginPage from "./pages/LoginPage";
// import SignupCust from './pages/SignupCust'
import SignUpPage from "./pages/SignUpPage";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { createTheme } from "@mui/material";
import { themeSettings } from "./theme";
import Layout from "./layout/Layout";
import Ticketboard from "./pages/Ticketboard/Ticketboard";
import EditTicket from "./pages/EditTicket";
import CreateTicket from "./pages/CreateTicket/CreateTicket";
import UserSurveyPage from "./pages/UserSurveyPage";
import SurveyInsert from "./pages/SurveyInsert";
import LimitTimeTicket from "./pages/LimitTimeTicket";
import { DatePicker } from "@mui/x-date-pickers";
import DailyChartPage from "./pages/DailyChartPage";

function App() {
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
    { path: "isuvrey", element: <SurveyInsert /> },
    {
      path: "dashboard",
      element: <Layout />,
      children: [
        { path: "ticketboard", element: <Ticketboard /> },
        { path: "editTicket/:id", element: <EditTicket /> },
        { path: "createTicket", element: <CreateTicket /> },
        { path: "limittimeticekets", element: <LimitTimeTicket /> },
        { path: "Daily", element: <DailyChartPage /> },
      ],
    },
    { path: "userSurveyFrom", element: <UserSurveyPage /> },
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
