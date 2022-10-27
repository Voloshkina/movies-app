import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Layout from "./components/Layout";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="movie-details" element={<Detail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
