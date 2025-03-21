import React, { useState, useEffect } from 'react';
import './font.css';
import InfoDiv from './infoDiv';
import nextjs from './media/next.svg';
import ts from './media/ts.svg';
import js from './media/js.svg';
import tailwind from './media/tailwind.svg';
import { Link } from 'react-router-dom';

function CmdInfo() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [value, setValue] = useState('');

    useEffect(() => {
        const handleResize = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const sapo = () => {
        alert('Are you sure you want to leave this page?');
        window.location.href = 'https://i0.wp.com/exploramag.com/wp-content/uploads/2023/03/sapo-1.jpg?resize=1360%2C907&ssl=1';
    };

    const change = (event) => {
        const newValue = event.target.value.trim();
        setValue(newValue);
        if (newValue === 'cat /about') {
            window.location.href = '/about';
        } else if (newValue === 'cat /projects') {
            window.location.href = '/projects';
        }
    };

    return (
        <div className="flex justify-center lg:w-full w-96 mx-auto">
            <div className="border-2 border-neutral-600 bg-black rounded-md mt-2 p-3 w-full max-w-4xl">
                {/* Barra superior */}
                <div className="w-full  h-7 flex items-center px-2 ">
                    <div className="flex space-x-1">
                        <div className="h-3 w-3 rounded-full bg-red-700 hover:animate-breathing" onClick={sapo}></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-500 hover:animate-breathing"></div>
                        <div className="h-3 w-3 rounded-full bg-green-700 hover:animate-breathing"></div>
                    </div>
                    <div className="text-sm mx-auto">root@txuli: /portfolio/txuli</div>
                </div>

                {/* Consola principal */}
                <div className="p-2">
                    <div className="text-green-500">root@txuli: /portfolio/txuli$ cat /about</div>
                    <section className="ibm-plex-mono-regular">
                        <InfoDiv Text="username" Text2="Txuli" />
                        <article className="flex flex-col sm:flex-row sm:items-center pl-2">
                            <div className="text-gray-600">bio:</div>
                            <div className="sm:ml-2 w-3/4">
                                I have been programming since August 2023, and I am passionate about photography.
                                If I'm not cycling or capturing the world with my camera, I'm writing code.
                            </div>
                        </article>
                        <article>
                        <InfoDiv Text="Hobbies:" Text2="Photography" />
                        </article>
                        <article className="flex flex-col sm:flex-row sm:items-center pl-2 mt-3">
                            <div className="text-gray-600">Tech stack:</div>
                            <div className="sm:ml-2 w-3/4">
                                In 2024 I started learning React.js and TailwindCSS. During my Erasmus in Prague, I learned Next.js.
                                Also, during my project <Link to="/projects" className='text-purpleSymply underline'>DurangaldekoBZK Page</Link>, I started using APIs with TypeScript.
                            </div>
                        </article>

                        {/* Tech Stack Icons */}
                        <div className="flex justify-center gap-4 my-4">
                            <img src={nextjs} alt="nextjs icon" className="h-10 sm:h-12" />
                            <img src={ts} alt="typescript icon" className="h-10 sm:h-12" />
                            <img src={js} alt="javascript icon" className="h-10 sm:h-12" />
                            <img src={tailwind} alt="tailwindCSS icon" className="h-10 sm:h-12" />
                        </div>

                        <InfoDiv Text="Developer Since" Text2="August 2023" />
                        
                    </section>
                </div>

                {/* Entrada de Comandos */}
                <div className="flex items-center p-2 border-t border-neutral-600">
                    <span className="text-green-500">root@txuli: /portfolio/txuli$</span>
                    {/* <input
                        type="text"
                        value={value}
                        onChange={change}
                        placeholder="Write different commands"
                        className="bg-black text-white ml-2 outline-none w-full sm:w-auto"
                    /> */}
                </div>
            </div>
        </div>
    );
}

export default CmdInfo;
