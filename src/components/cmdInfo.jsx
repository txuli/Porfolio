import React from 'react';
import './font.css';
import InfoDiv from './infoDiv';

const CmdInfo = () => {
    
    const instaLink = () => {
        alert('Are you sure you want to leave this page?');
        window.location.href= 'https://i0.wp.com/exploramag.com/wp-content/uploads/2023/03/sapo-1.jpg?resize=1360%2C907&ssl=1';
    }
    return (
        <div className=' flex justify-center w-full'>
            <div className='h-3/6 w-2/6 border-neutral-600 bg-black rounded-md border-2 relative mt-28 ml-9 '>
            <div className='w-full bg-gray-600/ h-7 relative grid grid-cols-3'>
                <div className='w-full bg-gray-600/ h-7 relative flex items-center ml-2'>
                    <div className='h-3 w-3 rounded-full bg-red-700 mr-1 hover:animate-breathing' onClick={instaLink}></div>
                    <div className='h-3 w-3 rounded-full bg-yellow-500 mr-1 hover:animate-breathing'></div>
                    <div className='h-3 w-3 rounded-full bg-green-700 mr-1 hover:animate-breathing'></div>
                </div>
                <div className=''>
                    root@txuli: /portfolio/txuli
                </div>
                <div>
                </div>

            </div>
            <div className=' w-full flex pl-1'>
                <div className='mr-2'>root@txuli: /portfolio/txuli$</div> <div> cat /about</div>
            </div>
            <div>
                <div className='ibm-plex-mono-regular h-96'>
                    <InfoDiv Text='username' Text2='Txuli' />
                   
                    <div className='flex pl-2'>
                        <div className='mr-2 text-gray-600 '>
                            bio:
                        </div>
                        <div className='w-96'>
                        I have been programming since August 2023, and I am passionate about photography. If I'm not cycling or capturing the world with my camera, I'm writing code.
                        </div>
                        
                    </div>
                    <InfoDiv Text='Developer Since' Text2='August 2023 (seriously programming since May 2024)' />
                    <InfoDiv Text='Hobbies' Text2='Photgraphy' />
                </div>
            </div>
        </div>
        </div>
    );
};

export default CmdInfo;