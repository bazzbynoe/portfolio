import { useState } from "react";
import Hero from "./sections/Hero";

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY + window.scrollY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-[#0f172a] overflow-hidden"
    >
      {/* Gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(
            600px at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(59,130,246,0.15),
            transparent 80%
          )`,
        }}
      />

      {/* Main Layout */}
      <main className="relative z-10 flex justify-center">

        <div className="w-full max-w-7xl px-6">

          <Hero />

        </div>

      </main>

    </div>
  );
}