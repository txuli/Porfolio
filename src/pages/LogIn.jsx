import React from 'react';

import Button from '../components/Button';
const LogIn = () => {
    return (
        

         <div className='w-full h-full flex justify-center '>
            
         <div className='purpleColorDegrade h-96 relative w-2/6 rounded-2xl grid grid-rows-4'>
                    <div className=' flex justify-center'><h1 className='text-2xl justify-center  mt-2'>Log In</h1></div>
                    
                    <div><input type="text" name="Usern Name" id="User" placeholder='Write your preasigned user'/></div>
                
                    <div><input type="text" name="Psswd" id="Psswd" placeholder='Write your preasigned Password'/></div>
                    <div className='flex justify-center'><Button /></div>
                </div>
         </div>
          

       
    );
};

export default LogIn;