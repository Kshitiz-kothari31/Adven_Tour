import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home/home";
import Trek from "./pages/Trek/trek";
import ContactSection from "./components/Contact";
import DayaraBuyal from "./pages/Trek/DayaraBugyal/dayarabugyal";
import Layout from "./layout";
import Zipline from "./pages/Zip&kay/Zipline";
import Gallery from "./pages/Gallery/Gallery";

import BungeeJumping from "./pages/bungeeJumping/bungeeJumping";

import Rafting from "./pages/Rafting/Rafting";
import Shivpuri from "./pages/Rafting/Raftingpage/Shivpuri";
import Nim from "./pages/Rafting/Raftingpage/Nim";
import Kodilyla from "./pages/Rafting/Raftingpage/Kodilyla";
import Marine from "./pages/Rafting/Raftingpage/Marine";
import KedarKatha from "./pages/Trek/KedarKatha/kedarKatha";
import HiddenWaterfall from "./pages/Trek/HiddenWaterfall/hiddenWaterfall";
import TungnathTrek from "./pages/Trek/TungnathTrek/tungnathTrek";
import GomukhTrek from "./pages/Trek/GomukhTrek/gomukhTrek"
import Kayaking from "./pages/Zip&kay/Kayaking";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const done = () => setLoading(false);  // flip when window 'load' fires
    window.addEventListener("load", done);

    const t = setTimeout(done, 1200);      // hard cap – adjust if you like
    return () => {
      window.removeEventListener("load", done);
      clearTimeout(t);
    };
  }, []);
  return (
    <Router>
      {loading && (
              <Loader
                visible={loading}
                onHidden={() => setLoading(false)}  // unmount after fade
              />
            )}
       <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/trek" element={<Trek />} />
              <Route path="/trek/dayarabuyal" element={<DayaraBuyal />} />
              <Route path="/trek/kedarKatha" element={<KedarKatha />} />
              <Route path="/trek/hiddenWaterFall" element={<HiddenWaterfall />} />
              <Route path="/trek/tungnath" element={<TungnathTrek />} />
              <Route path="/trek/gaumukh" element={<GomukhTrek/>} />
              <Route path="/zipline" element={<Zipline />} />
              <Route path="/kayaking" element={<Kayaking />} />
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