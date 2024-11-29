import NavBar from '../components/NavBar'
import Footer from '../components/footer';
import Effect from '../components/Effect';
const projects = () => {
    return (
        <div>
             <header>
                
                
                <Effect
                    text="Projects"
                    mLeftInicial={'-200'}
                    transitionTime={2}
                    tickCambioLetra={200}
                    randCar={null}
                    fontSize={30}
                    marginLeftDiv={30}
                    
                />
            </header>
            <div className='h-96 mt-11 flex justify-center'>
                <p><b>the projects are too early version to show them, if you want to follow these projects when they were available please visit my <a href="https://github.com/Txuli17" target="_blank" rel="github link" className='text-blue-600 '>GitHub</a>:)</b></p>
            </div>
            
        </div>
    )
}
export default projects