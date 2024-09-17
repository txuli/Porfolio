import React from 'react';
import Effect from './Effect';
export default function Title() {
     const Name = "Txuli's"
      const Text = 'Portfolio'
        return (
            
           <>
            <Effect 
            text={Name}
            mLeftInicial={'-200'}
            transitionTime={2}
            tickCambioLetra={200}
            randCar={null}
            fontSize={60}
            marginLeftDiv={30}
            />
           
           </>
    
        );
    };



