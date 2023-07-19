import './home.css'
import HeroSection from '../HeroSection/HeroSection';
import Specials from '../Specials/Specials';
import Testemonials from '../Testimonials/Testimonials';
import About from '../About/About';
import Footer from '../Footer/Footer';

function Home() {

    return (
        <main className='home-container'>
            <HeroSection />
            <Specials />
            <Testemonials />
            <About />
            <Footer />
        </main>
    );
}

export default Home;