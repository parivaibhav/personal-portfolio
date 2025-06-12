import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScroll(scrolled);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "5px",
        background: "rgba(30, 41, 59, 0.15)", // subtle dark blue/gray for modern UI
        zIndex: 9999,
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          width: `${scroll}%`,
          height: "100%",
          background: "linear-gradient(90deg, #6366f1, #06b6d4)", // modern blue/cyan gradient
          borderRadius: "2px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          transition: "width 0.2s",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
