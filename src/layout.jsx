import Navbar from './components/Navbar/navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout(){
    return(
        <>
            <Navbar />
            <main className='mt-[80px] '> 
                <Outlet/>
            </main>
            <Footer/>
        </>

    )
}

export default Layout