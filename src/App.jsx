import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Trek from "./pages/Trek/trek";
import Page2 from "./pages/page2";
import Layout from "./layout";
import Zipline from "./pages/Zip&kay/Zipline";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/trek" element={<Trek />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/zipline" element={<Zipline />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;