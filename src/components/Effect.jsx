import React, { useEffect, useState } from 'react'

export default function Effect({ text, mLeftInicial = -180, transitionTime = 2, randCar, tickCambioLetra = 150, fontSize, marginLeftDiv }) {
    const [marginLeft, setMarginLeft] = useState(mLeftInicial ? mLeftInicial : 0)
    const caracteresRandom = randCar ? randCar : ['$', '%', '#', '@', '*', 'R', 'H', 'A', '4', 'P', '0', 'O', 'F']
    const [newText, setNewText] = useState('')
     const [newFontSize, setFontSize] = useState('')
    // Para el randomIntFromInterval
    const min = 0
    const max = caracteresRandom.length - 1

    // Conseguir número random entre dos números
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    useEffect(() => {
        console.log(marginLeft, mLeftInicial);
        setMarginLeft(0)
        let contaCiclos = 0

        let myInterval = setInterval(() => {
            var tempText = ''
            var trozoPalabra = ''

            // montamos la porcion de titulo encriptado del ciclo
            for (let i = contaCiclos; i < text.length; i++) {
                let x = randomIntFromInterval(min, max)
                tempText = tempText + caracteresRandom[x]
            }
            // montamos la porción del titulo real
            for (let i = 0; i < contaCiclos; i++) {
                trozoPalabra = trozoPalabra + text[i]
            }
            // actualizamos la palabra que estamos mostrando
            setNewText(trozoPalabra + tempText)
            // incrementamos ciclo
            contaCiclos = contaCiclos + 1

            if (contaCiclos > text.length) {
                clearInterval(myInterval)
            }
        }, tickCambioLetra);

        return () => clearInterval(myInterval)

    }, [])

    return (
        <div className="h-20" style={{
            marginLeft: `${marginLeftDiv}px`,
        }}>
            <h1 className={`encryptClassH2 relative tracking-wide font-extrabold ibm-plex-mono-regular `} style={{
                marginLeft: `${marginLeft}px`,
                transition: `margin ${transitionTime}s`,
                fontSize: `${fontSize}px`,
            }}>{newText}</h1>
        </div>
    )
}