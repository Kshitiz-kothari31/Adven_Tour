import Navbar from './components/Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Form from './components/form/Form'

function Layout(){
    return(
        <>
            <Navbar />
            <main > 
                <Outlet/>
            </main>
            <Form/>
            <Footer/>
        </>

    )
}

export default Layout