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
import Signup from "./pages/SignIn";
// import SignupCust from './pages/SignupCust'
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import { Dashboard } from "./pages/Dashboard";
import Ticket from "./pages/Ticket";


function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Navigate to="/login"/>,
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

  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
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
