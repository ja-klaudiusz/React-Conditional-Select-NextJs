import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Bg = ({ children }) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x211431,
          backgroundColor: 0x10009,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="w-full min-h-screen z-0 bg-primary-900 fixed top-0 left-0">
      <div ref={myRef} className="w-full min-h-screen ">
        {children}
      </div>
    </div>
  );
};

export default Bg;
