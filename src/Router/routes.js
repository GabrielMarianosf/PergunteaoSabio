import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Conselho from "../Pages/About/Conselho";

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conselho" element={<Conselho />} />
    </Routes>
  );
}
