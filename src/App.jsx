import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Trek from "./pages/Trek/trek";
import DayaraBuyal from "./pages/Trek/DayaraBugyal/dayarabugyal";
import Page2 from "./pages/page2";
import Layout from "./layout";
import Zipline from "./pages/Zip&kay/Zipline";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trek" element={<Trek />} />
          <Route path="/trek/dayarabuyal" element={<DayaraBuyal />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/zipline" element={<Zipline />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;