import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Ticket System</h1>
                </Link>
                
                <Link to="/insert">
                    <h1>insert ticket</h1>
                </Link>

            </div>
        </header>
    )
}

export default Navbar