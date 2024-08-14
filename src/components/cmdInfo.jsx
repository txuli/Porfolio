import React from 'react';
import './font.css';
import InfoDiv from './infoDiv';
const CmdInfo = () => {
    const instaLink = () => {
        window.open('https://www.instagram.com/_infiniteframes', '_blank');
    }
    return (
        <div className='h-3/6 w-3/6 border-neutral-600 bg-black rounded-md border-2 relative mt-28 ml-9'>
            <div className='w-full bg-gray-600/ h-7 relative grid grid-cols-3'>
                <div className='w-full bg-gray-600/ h-7 relative flex '>
                    <div className='h-3 w-3 rounded-full bg-red-700 mr-1 flex items-center justify-center'></div>
                    <div className='h-3 w-3 rounded-full bg-yellow-500 mr-1'></div>
                    <div className='h-3 w-3 rounded-full bg-green-700 mr-1'></div>
                </div>
                <div className=''>
                    root@txuli: /portfolio/txuli
                </div>
                <div>
                </div>

            </div>
            <div className=' w-full flex'>
                <div className='mr-2'>root@txuli: /portfolio/txuli$</div> <div> cat /about</div>
            </div>
            <div>
                <div className='ibm-plex-mono-regular'>
                    <InfoDiv Text='username' Text2='Txuli' />
                    <div className='w-3/6 flex'>
                        <div className='flex items-center justify-center  text-gray-600  mr-2 text-center'>
                            Hobbies
                        </div>

                        <div className='flex items-center justify-center w-16 purpleColor border-2 border-fuchsia-950 rounded-md  text-center   mr-2 hover:bg-[#e987e9] transition duration-500 cursor-pointer' onClick={instaLink}>
                            account
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='mr-2 text-gray-600 '>
                            bio:
                        </div>
                        <div className='w-96'>
                        I have been programming since August 2023, and I am passionate about photography. If I'm not cycling or capturing the world with my camera, I'm writing code.
                        </div>
                    </div>
                    <InfoDiv Text='Developer Since' Text2='August 2023 (seriously programming since May 2024)' />
                </div>
            </div>
        </div>
    );
};

export default CmdInfo;