import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { ErrorPage } from "./pages/ErrorPage";
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
import TicketboardPage from "./pages/Ticketboard/TicketboardPage";
import EditTicketPage from "./pages/EditTicketPage";
import CreateTicketPage from "./pages/CreateTicket/CreateTicketPage";
import UserSurveyPage from "./pages/UserSurveyPage";
import SurveyInsert from "./pages/SurveyInsert";
import LimitTimeTicketPage from "./pages/LimitTimeTicketPage";
import DailyChartPage from "./pages/DailyChartPage";
import OverViewPage from "./pages/OverViewPage";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/login" />,
      errorElement: <ErrorPage />,
    },
    {
      path: "login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
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
        { path: "ticketboard", element: <TicketboardPage /> },
        { path: "editTicket/:id", element: <EditTicketPage /> },
        { path: "createTicket", element: <CreateTicketPage /> },
        { path: "limittimeticekets", element: <LimitTimeTicketPage /> },
        { path: "Daily", element: <DailyChartPage /> },
        { path: "overView", element: <OverViewPage /> },
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