import {FiArrowRight} from 'react-icons/fi';
import logoImg from '../images/logo.svg'
import {Link} from 'react-router-dom';

import '../styles/pages/landing.css'

function Landing() {
    return (
        <div id="landing-page">
            <div className="content-wrapper">

                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p> Visite orfanatos e mude o dia de muitas crianças. </p>
                </main>

                <div className="location">
                    <strong>Aracaju</strong>
                    <span>Sergipe</span>
                </div>

                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba{0,0,0.6}" />
                </Link>
            </div>
        </div>
    );
}

export default Landing;