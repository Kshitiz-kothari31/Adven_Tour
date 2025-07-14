import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/home";
import Trek from "./pages/Trek/trek";
import ContactSection from "./components/Contact";
import DayaraBuyal from "./pages/Trek/DayaraBugyal/dayarabugyal";
import Layout from "./layout";
import Zipline from "./pages/Zip&kay/Zipline";
import Gallery from "./pages/Gallery/Gallery";
import Rafting from "./pages/Rafting/Rafting";
import Shivpuri from "./pages/Rafting/Raftingpage/Shivpuri";
import Nim from "./pages/Rafting/Raftingpage/Nim";
import Kodilyla from "./pages/Rafting/Raftingpage/Kodilyla";
import Marine from "./pages/Rafting/Raftingpage/Marine";
import KedarKatha from "./pages/Trek/KedarKatha/kedarKatha";
import HiddenWaterfall from "./pages/Trek/HiddenWaterfall/hiddenWaterfall";
import TungnathTrek from "./pages/Trek/TungnathTrek/tungnathTrek";

function App() {
  return (
    <Router>
       <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/trek" element={<Trek />} />
              <Route path="/trek/dayarabuyal" element={<DayaraBuyal />} />
              <Route path="/trek/kedarKatha" element={<KedarKatha />} />
              <Route path="/trek/hiddenWaterFall" element={<HiddenWaterfall />} />
              <Route path="/trek/tungnath" element={<TungnathTrek />} />
              <Route path="/zipline" element={<Zipline />} />
              <Route path="/Gallery" element={<Gallery />} />
              <Route path="/rafting" element={<Rafting/>}  />
              <Route path="/Rafting/shivpuri" element={<Shivpuri />} />
              <Route path="/Rafting/nim" element={<Nim />} />
              <Route path="/Rafting/marine" element={<Marine />} />
              <Route path="/Rafting/kodilyla" element={<Kodilyla />} />
              <Route path="/Contact" element={<ContactSection/>} />
            </Route>
          </Routes>
    </Router>
  );
}

export default App;