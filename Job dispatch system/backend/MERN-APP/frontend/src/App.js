import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import SignupCust from './pages/SignupCust'
import Navbar from './components/Navbar'

function App() {
  const {customer} = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={customer ? <Home /> :<Navigate to="/login"/>}
            />
            <Route 
              path="/login"
              element={!customer ? <Login /> :<Navigate to="/"/>}
            />
            <Route 
              path="/Signup"
              element={!customer ? <Signup /> :<Navigate to="/"/>}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
