import './App.css';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import About from './components/About';
import Video from './components/Video';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import ContactUs from './components/ContactUs';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <About/>
      <Video/>
      <Features/>
      <Team/>
      <Testimonials/>
      <Faq/>
      <ContactUs/>
      <Download/>
      <Footer/>
    </div>
  );
}

export default App;
