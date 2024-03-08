import NavBar from '../components/NavBar'
import Footer from '../components/footer';

const Home = () =>{
    return (
        <div className="h-screen">
            <NavBar />
            
            <div className='flex justify-center'>
                <div className='bg-zinc-600 flex justify-center items-center w-96 my-9 py-6 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)]'> 
                    <div className='flex justify-center '>
                    <img src="src/pages/media/DSC_9703.jpeg" alt="imagen de Asier Alberi" className='h-40 rounded-full'/></div>
                    <div className='mx-3'>
                    <div className='justify-center text w-15'>Asier Alberdi</div>
                    <div className='w-15 text-zinc-400'>@Txuli</div>
                    <div className='w-7'><a href="https://github.com/Txuli17" target='blank'><img src="src/pages/media/icons8-github.svg" alt="github" className='h-7' /></a></div>
                    
                </div>
            </div> 
        </div>
            <div className='flex justify-center my-7'>
                <h2 className='text-lg' ><b>Current Goals</b></h2>
            </div>
                <div className='grid sm:grid-cols-3 xl:grid-flow-row mx-3'>
                    <div className='flex justify-center'>
                        <div className='w-3/4 bg-zinc-600 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)] p-2 mx-3  sm: my-6'>
                            <div className='w-full flex justify-center'><img src="src/pages/media/icons8-backend-50.png" alt="backend image" className=' object-cover filter invert '/></div>
                            <div><h2 className='text-lg w-full flex justify-center'><b>Backend</b></h2></div>
                            <div className='content-center'>I want to learn more about APIS for the requests of the server and make a new project about photography.</div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-3/4 bg-zinc-600 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)] p-2 mx-3 my-6'>
                            <div className='w-full flex justify-center'><img src="src/pages/media/icons8-database-50.png" alt="database image" className=' object-cover filter invert '/></div>
                            <div><h2 className='text-lg w-full flex justify-center'><b>Databases</b></h2></div>
                            <div className='content-center'>I want to learn databases to create different parts of my future projects.</div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-3/4 bg-zinc-600 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)] p-2 mx-3 my-6'>
                            <div className='w-full flex justify-center'><img src="src/pages/media/icons8-react-a-javascript-library-for-building-user-interfaces-48.png" alt="react image" className=' object-cover filter invert '/></div>
                            <div><h2 className='text-lg w-full flex justify-center'><b>Rreact</b></h2></div>
                            <div className='content-center'>I want to improve my skills in react to improve my webs in the future.</div>
                        </div>
                    </div>
                </div>
            <div className='w-full flex justify-center'>
                <div>
                    <h2>Tecnologies</h2>
                    <div><img src="src/pages/media/icons8-js.svg" alt="JS" /></div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
