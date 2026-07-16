"use client";

import { useEffect, useState } from "react";

interface EffectProps {
  text: string;
  mLeftInicial?: string | number;
  transitionTime?: number;
  randCar?: string[] | null;
  tickCambioLetra?: number;
  fontSize?: number;
  marginLeftDiv?: number;
}

export default function Effect({
  text,
  mLeftInicial = -180,
  transitionTime = 2,
  randCar,
  tickCambioLetra = 150,
  fontSize,
  marginLeftDiv,
}: EffectProps) {
  const [marginLeft, setMarginLeft] = useState(mLeftInicial ? mLeftInicial : 0);
  const caracteresRandom = randCar
    ? randCar
    : ["$", "%", "#", "@", "*", "R", "H", "A", "4", "P", "0", "O", "F"];
  const [newText, setNewText] = useState("");

  const min = 0;
  const max = caracteresRandom.length - 1;

  function randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    setMarginLeft(0);
    let contaCiclos = 0;

    const myInterval = setInterval(() => {
      let tempText = "";
      let trozoPalabra = "";

      // montamos la porcion de titulo encriptado del ciclo
      for (let i = contaCiclos; i < text.length; i++) {
        const x = randomIntFromInterval(min, max);
        tempText = tempText + caracteresRandom[x];
      }
      // montamos la porción del titulo real
      for (let i = 0; i < contaCiclos; i++) {
        trozoPalabra = trozoPalabra + text[i];
      }
      // actualizamos la palabra que estamos mostrando
      setNewText(trozoPalabra + tempText);
      // incrementamos ciclo
      contaCiclos = contaCiclos + 1;

      if (contaCiclos > text.length) {
        clearInterval(myInterval);
      }
    }, tickCambioLetra);

    return () => clearInterval(myInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className="h-20"
      style={{
        marginLeft: `${marginLeftDiv}px`,
      }}
    >
      <h1
        className="encryptClassH2 relative tracking-wide font-extrabold ibm-plex-mono-regular"
        style={{
          marginLeft: `${marginLeft}px`,
          transition: `margin ${transitionTime}s`,
          fontSize: `${fontSize}px`,
        }}
      >
        {newText}
      </h1>
    </div>
  );
}
