import './App.css';
import Header from './components/Header';
import Portfolio from './pages/Portfolio';  
import Footer from './components/Footer';


function App() {
  return (
    <div className="portfolio">
      <Header />
      <div className='about-me'>
        <p>
          Hi, I'm Marina, 
          <br />
          I'm a full stack developer who just completed a coding bootcamp with UCF. This boot camp consisted of three projects and weekly coding challenges.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
