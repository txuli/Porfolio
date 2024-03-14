import NavBar from '../components/NavBar'

const Home = () =>{
    return (
        <div className="h-screen">
            <NavBar />
            <div className='my-7 w-full grid grid-cols-7'>
            <div className='col-start-2 col-span-2'>
            <h1 className='text-xl'><b>About me</b></h1>
            Asier Alberdi
            </div>
            </div>
            <div className='w-8/12 m-auto'>
                <p>Hello! I'm passionate about web development since 2023. I love learning new technologies and I'm constantly exploring tools to create amazing online experiences. From HTML and CSS to JavaScript and frameworks like React, I'm always seeking new challenges. Outside the digital world, I enjoy the outdoors, music, and spending time with friends and family.</p>
            </div>
        </div>
    );
}

export default Home;