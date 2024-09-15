import { Routes, Route } from "react-router-dom";
import Repeat from "./pages/Repeat";
import Home from "./pages/Home";
import Improvisation from "./pages/Improvisation";
import SightReading from "./pages/SightReading";
import EarTraining from "./pages/EarTraining";
import Theory from "./pages/Theory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repeat" element={<Repeat />} />
        <Route path="/improvisation" element={<Improvisation />} />
        <Route path="/sightreading" element={<SightReading />} />
        <Route path="/eartraining" element={<EarTraining />} />
        <Route path="/theory" element={<Theory />} />
      </Routes>
    </>
  );
}

export default App;
