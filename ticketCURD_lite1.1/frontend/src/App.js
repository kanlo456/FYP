import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

//pages and components
import Home from './pages/Home';
import TicketInsert from './pages/TicketInsert'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>        
      <ToastContainer/>
        <div className='pages'>
          <Routes>
            <Route
            path='/'
            element={<Home/>}
            />
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
