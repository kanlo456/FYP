import React from 'react';
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { useAuthContext } from './hooks/useAuthContext'
  import 'react-toastify/dist/ReactToastify.css';

//pages and components
import Home from './pages/Home';
import TicketInsert from './pages/TicketInsert'
import Navbar from './components/Navbar';
import Login from './pages/Login'
import Signup from './pages/Signup'
import WorknoteInsert from './pages/WorknoteInsert'
import SurveyInsert from './pages/SurveyInsert'


function App() {
  const {user} = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>        
      <ToastContainer/>
        <div className='pages'>
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
            <Route
            path='/'
            element={<Home/>}
            />
            <Route
            path='/iworknote'
            element={<WorknoteInsert/>}/>
            <Route
            path='/isuvrey'
            element={<SurveyInsert/>}/>
            <Route
            path='/insert'
            element={<TicketInsert/>}
            />
              <Route path='/add' element={<TicketInsert/>}/>
              <Route path='/update/:id' element={<TicketInsert/>}/>


          </Routes>
        </div>
          
      </BrowserRouter>
     
    </div>
  );
}

export default App;
