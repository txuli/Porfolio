"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NavBar = () => {
  const [isInUpperZone, setIsInUpperZone] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHeight = window.innerHeight;
      const cursorY = event.clientY;
      const upperLimit = windowHeight * 0.3;

      if (cursorY < upperLimit) {
        setIsInUpperZone(true);
      } else {
        setIsInUpperZone(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  return (
    <div className="justify-center flex relative z-50">
      <div className="relative">
        <div
          className={`bg-gray-600/10 border-2 transition-all duration-300 border-gray-700/50 rounded-2xl mt-1 ${
            isInUpperZone && !isMobile ? "w-96" : "w-12"
          } ${isMobile ? "w-96" : ""}`}
        >
          <div className="flex items-center gap-x-4 px-2">
            {/* Imagen */}
            <div className="w-11 relative z-10">
              <Link href="/">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/media/home.svg"
                  alt=""
                  className="filter invert h-10 transition-all duration-150"
                />
              </Link>
            </div>

            {/* Enlaces */}
            <div className="absolute flex items-center right-3">
              <div
                className={`${
                  isInUpperZone || isMobile ? "opacity-100 delay-350" : "opacity-0"
                }`}
              >
                <Link href="/projects" className="text-white">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
