import React, { useState, useEffect, useRef } from "react";
import Thpace from "thpace";
// import NET from "vanta/dist/vanta.net.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Bg = ({ children }) => {
  const myRef = useRef(null);
  const settings = {
    colors: ["#053143", "#0e0511", "#43344a"],
    triangleSize: 100,
    maxFps: 20,
    count: [1, 3],
    radius: [1, 6],
  };
  useEffect(() => {
    Thpace.create(myRef.current, settings);
  }, []);
  return (
    <div className="w-full min-h-screen z-0 bg-primary-900 fixed top-0 left-0">
      <canvas ref={myRef} />
    </div>
  );
};

export default Bg;
