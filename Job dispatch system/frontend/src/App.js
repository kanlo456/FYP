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
import PrivateRoutes from "./pages/untils/PrivateRoutes";
import DashboardPage from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode), [mode]));

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Navigate
          to={
            localStorage.getItem("user") === null
              ? "/login"
              : localStorage.getItem("lastpage")
          }
        />
      ),
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
      element: (
        <PrivateRoutes>
          <Layout />
        </PrivateRoutes>
      ),
      children: [
        { path: "home", element: <Home /> },
        {
          path: "ticketboard",
          element: (
            <PrivateRoutes>
              <TicketboardPage />
            </PrivateRoutes>
          ),
        },
        {
          path: "editTicket/:id",
          element: (
            <PrivateRoutes>
              <EditTicketPage />
            </PrivateRoutes>
          ),
        },
        {
          path: "createTicket",
          element: (
            <PrivateRoutes>
              <CreateTicketPage />
            </PrivateRoutes>
          ),
        },
        {
          path: "limittimeticekets",
          element: (
            <PrivateRoutes>
              <LimitTimeTicketPage />
            </PrivateRoutes>
          ),
        },
        {
          path: "Daily",
          element: (
            <PrivateRoutes>
              <DailyChartPage />
            </PrivateRoutes>
          ),
        },
        {
          path: "overView",
          element: (
            <PrivateRoutes>
              <OverViewPage />
            </PrivateRoutes>
          ),
        },
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
