import { Link } from "react-router-dom"

function Navbar(){
    return(
        <>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/page1">
                <button>Page 01</button>
            </Link>
            <Link to="/page2">
                <button>Page 02</button>
            </Link>
        </>
    )
}

export default Navbar