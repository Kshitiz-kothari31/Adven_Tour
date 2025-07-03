import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Trek from "./pages/Trek/trek";
import Page2 from "./pages/page2";
import Layout from "./layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Trek />} />
          <Route path="/page2" element={<Page2 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;