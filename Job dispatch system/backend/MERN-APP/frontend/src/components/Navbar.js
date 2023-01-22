import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const {logout} = useLogout()
  const {customer} = useAuthContext()

  const handleClick = () =>{
    logout()
  }
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {customer &&(
          <div>
            <span>{customer.username}</span>
            <button onClick={handleClick}>Log out</button>
          </div>
          )}
          
          {!customer&&(
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
          )}
          
        </nav>
      </div>
    </header>
  )
}

export default Navbar