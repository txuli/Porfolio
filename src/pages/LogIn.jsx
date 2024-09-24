import React from 'react';
import Effect from '../components/Effect';

const LogIn = () => {
    return (
        <>
            <Effect
                text="Log In"
                mLeftInicial={'-200'}
                transitionTime={2}
                tickCambioLetra={200}
                randCar={null}
                fontSize={30}
                marginLeftDiv={30}

            />
            <form className='w-full h-full flex justify-center '>
                <div className='bg-black h-96 relative border-neutral-600 border w-80 rounded-2xl grid grid-rows-10'>
                    <div className=' flex justify-center'><h1 className='text-2xl justify-center  mt-2'>Log In</h1></div>
                    <div className='row-start-3 w-full flex justify-center'>
                        <input type="text" name="Usern Name" id="User" placeholder='  Write your preasigned user ' className='w-5/6 h-11 rounded-md pl-4' />
                    </div>

                    <div className='row-start-5 w-full flex justify-center'>
                        <input type="text" name="Psswd" id="Psswd" placeholder='  Write your preasigned Password' className='w-5/6 h-11 rounded-md pl-4' />
                    </div>
                    <div className='flex justify-center row-start-8'>
                        <button className='bg-purpleSymply/70 rounded-lg w-28'>
                            Log In
                        </button>
                    </div>
                    <div className='flex justify-center row-start-9 '>
                        <a href="mailto:asier.alberdi@txuli.com?Subject=New%20user%20and%20password%20for%20'Your%20company%20name'?body=I%20want%20to%20get%20credentials%20%20%20if%20you%20want%20to%20add%20any%20extra%20notes%20%20%20or%20just%20send" className='my-auto text-purpleSymply  hover:underline' >You don't have credentials?</a>
                    </div>
                </div>
            </form>
        </>

    );
};

export default LogIn;