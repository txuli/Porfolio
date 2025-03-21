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

            <header>
                
                
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
            
        
        </div>
    );
}

export default Home;
