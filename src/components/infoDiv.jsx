import React from 'react';

const InfoDiv = (props) => {
    return (
        <>

            <div className='w-auto flex items-center pl-2'>
                <div className='text-gray-600 ibm-plex-mono-regular mr-2 text-center mb-'>{props.Text}</div>
                <div className=' w-96 text-left'>{props.Text2} </div>
            </div>


        </>
    );
};

export default InfoDiv;