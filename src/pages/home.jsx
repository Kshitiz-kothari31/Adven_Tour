import { Link } from "react-router-dom"

function Home(){
    return(
        <>
            <h1>Home Page</h1>
            <Link to="/">Home</Link>
            <Link to="/page1">Page1</Link>
            <Link to="/page2">Page2</Link>
        </>
    )
}

export default Home