import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./pages/Home/home";
import Trek from "./pages/Trek/trek";
import Page2 from "./pages/page2";
import Layout from "./layout";
import Zipline from "./pages/Zip&kay/Zipline";
import Gallery from "./pages/Gallery/Gallery";
import Rafting from "./pages/Rafting/Rafting";
import Shivpuri from "./pages/Rafting/Raftingpage/Shivpuri";
import Nim from "./pages/Rafting/Raftingpage/Nim";
import Kodilyla from "./pages/Rafting/Raftingpage/Kodilyla";
import Marine from "./pages/Rafting/Raftingpage/Marine";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trek" element={<Trek />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/zipline" element={<Zipline />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/rafting" element={<Rafting/>}  />
          <Route path="/shivpuri" element={<Shivpuri/>}  />
          <Route path="/kodilyla" element={<Kodilyla/>}  />
          <Route path="/nim" element={<Nim/>}  />
          <Route path="/marine" element={<Marine/>}  />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;