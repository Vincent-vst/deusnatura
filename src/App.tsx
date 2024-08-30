import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Stats from "./pages/Stats";
import Contact from "./pages/Contact";
import Theory from "./pages/Theory";
import SightReading from "./pages/SightReading";
import Improvisation from "./pages/Improvisation";

function App(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/stats' element={<Stats />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/theory' element={<Theory />}></Route>
        <Route path='/sightreading' element={<SightReading />}></Route>
        <Route path='/improvisation' element={<Improvisation />}></Route>
      </Routes>
    </Router>
  )
}

export default App;