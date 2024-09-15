import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repeat from "./pages/repeat";
import Layout from "./pages/Layout";

function App() {
  return (
    <>
      <h1>index</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="repeat" element={<Repeat />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
