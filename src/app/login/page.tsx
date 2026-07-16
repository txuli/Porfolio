"use client";

import { useEffect, useState } from "react";
import Effect from "@/components/Effect";
import FormLogIn from "@/components/FormLogIn";

export default function LogIn() {
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Effect
        text=""
        mLeftInicial={"-200"}
        transitionTime={2}
        tickCambioLetra={200}
        randCar={null}
        fontSize={30}
        marginLeftDiv={30}
      />
      {screenWidth > 1000 ? (
        <FormLogIn />
      ) : (
        <div className="mt-36">
          <FormLogIn />
        </div>
      )}
    </>
  );
}
