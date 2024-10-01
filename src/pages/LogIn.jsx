import React, { useState } from 'react';
import Effect from '../components/Effect';
import FormLogIn from '../components/FormLogIn';

function LogIn   ()  {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    return (
        <>
        <Effect />
            {screenWidth > 1000 ? (
                   <FormLogIn />
            ):(
                <div className='mt-36'>
                    <FormLogIn />
                </div>

            )}
        </>
    );
};

export default LogIn;