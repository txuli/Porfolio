import NavBar from '../components/NavBar'

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
                    <div className='w-7'>
                        <a href="https://github.com/Txuli17" target='blank'><img src="src/pages/media/github-mark-white.png" alt="github" className='h-7' /></a>
                    
                    </div>
                </div>
            </div>
                
        </div>
        </div>
    );
}

export default Home;
