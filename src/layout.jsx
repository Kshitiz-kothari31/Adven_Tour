import Navbar from './components/Navbar/navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';

function Layout() {
  const location = useLocation();

  const getBgClass = () => {
    // Rafting pages
    const raftingPages = [
      "/rafting/shivpuri",
      "/rafting/nim",
      "/rafting/marine",
      "/rafting/kodilyla"
    ];
    if (raftingPages.some(path => location.pathname.startsWith(path))) {
      return "bg-gradient-to-b from-[#dff6ff] via-[#b7e4f4] to-[#dff6ff] ";
    }

    // Trek pages
    const trekPages = [
      "/trek/dayarabuyal",
      "/trek/kedarKatha",
      "/trek/hiddenWaterFall",
      "/trek/tungnath",
      "/trek/gaumukh"
    ];
    if (trekPages.some(path => location.pathname.startsWith(path))) {
      return "bg-[#FDFAF6]";
    }

    // Gallery pages
    const galleryPages = ["/gallery", "/Gallery"];
    if (galleryPages.some(path => location.pathname.startsWith(path))) {
      return "bg-gradient-to-r from-[#ffffff] to-[#f1daff]";
    }

    if (location.pathname.startsWith("/Rafting")) {
    return "bg-gradient-to-r from-[#fafafa] to-[#B2EBF2]";
    }

    // Stays pages
    const staysPages = ["/stays", "/Stays"];
    if (staysPages.some(path => location.pathname.startsWith(path))) {
      return "bg-[#F3E9DC]";
    }

    // Bungee
    if (location.pathname.startsWith("/bungee")) {
      return "bg-gradient-to-r from-white to-[#cceeff]";
    }

    if (location.pathname.startsWith("/trek")) {
    return "bg-gradient-to-r from-[#fafafa] to-[#DBFCE7]";
    }


    // Kayaking
    if (location.pathname.startsWith("/kayaking")) {
      return "bg-gradient-to-r from-blue-100 via-cyan-50 to-teal-100";
    }

    // Zipline
    if (location.pathname.startsWith("/zipline")) {
      return "bg-gradient-to-r from-[#fafafa] to-[#FFF5E4]";
    }

    // Home or default
    if (location.pathname === "/") {
      return "bg-gradient-to-r from-[#ffffff] via-[#f6fbf9] to-[#e9f5f1]";
    }

    return "bg-white"; // fallback default
  };

  return (
    <div className={getBgClass()}>
      <Navbar />
      <main> {/* Adjust based on navbar height */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
