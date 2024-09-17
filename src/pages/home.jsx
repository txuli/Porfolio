import NavBar from '../components/NavBar'
import Footer from '../components/footer';
import asier_img from './media/DSC_9703.jpeg'
import GithubLogo from './media/github-mark-white.png'
import backend from './media/icons8-backend-50.png'
import ImgDatabase from './media/icons8-database-50.png'
import ImgReact from './media/React.png'
import CmdInfo from '../components/cmdInfo';
import Title from '../components/Title';
import Effect from '../components/Effect';

const Home = () => {
    return (
        <div className="">
            <div className="absolute inset-0 ">
                <div class="absolute inset-0 -z-10 h-full w-full items-center  [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#800080_100%)]"></div>
                <div class="relative h-full w-full "><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div>
            </div>

            <header>
                <NavBar />
                <Title />
                <Effect
                    text="Portfolio"
                    mLeftInicial={'-200'}
                    transitionTime={2}
                    tickCambioLetra={200}
                    randCar={null}
                    fontSize={30}
                    marginLeftDiv={30}

                />
            </header>

            <CmdInfo />
            {/* <NavBar />

            <div className='flex justify-center'>
                <div className='bg-zinc-600 flex justify-center items-center lg:w-2/6 my-9 py-6 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)] sm:w-/4'>
                    <div className='flex justify-center px-2'>
                        <img src={asier_img} alt="imagen de Asier Alberi" className='h-40 rounded-full ' /></div>
                    <div className='mx-3'>
                        <div className='justify-center text w-15'>Asier Alberdi</div>
                        <div className='w-15 text-zinc-400'>@Txuli</div>
                        <div className='w-7'><a href="https://github.com/txuli" target='blank'><img src={GithubLogo} alt="github" className='h-7' /></a></div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center my-7'>
                <h2 className='text-lg' ><b>Current Goals</b></h2>
            </div>
            <div className='grid sm:grid-cols-3 xl:grid-flow-row mx-3'>
                <div className='flex justify-center'>
                    <div className='w-3/4 bg-zinc-600 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)] p-2 mx-3  sm: my-6'>
                        <div className='w-full flex justify-center'><img src={backend} alt="backend image" /></div>
                        <div><h2 className='text-lg w-full flex justify-center'><b>Backend</b></h2></div>
                        <div className='content-center text-center'>I want to learn more about APIS for the requests of the server and make a new fotography project.</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-3/4 bg-zinc-600 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)] p-2 mx-3 my-6'>
                        <div className='w-full flex justify-center'><img src={ImgDatabase} alt="database image" /></div>
                        <div><h2 className='text-lg w-full flex justify-center'><b>Databases</b></h2></div>
                        <div className='content-center text-center'>I want to learn databases to create different parts of my future projects.</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='w-3/4 bg-zinc-600 rounded-md border-2 border-solid border-zinc-700 drop-shadow-[0_5px_5px_rgb(0,0,5)] p-2 mx-3 my-6'>
                        <div className='w-full flex justify-center'><img src={ImgReact} /></div>
                        <div><h2 className='text-lg w-full flex justify-center'><b>React</b></h2></div>
                        <div className='content-center text-center'>I want to improve my skills in react to improve my webs in the future.</div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <div className='grid'>
                    <h2 className='text-center'><b>Contact</b></h2>
                    <a href="mailto:a.alberdi@txuli.com">Send me an email</a>
                </div>
            </div> */}
            <Footer />
        </div>
    );
}

export default Home;
