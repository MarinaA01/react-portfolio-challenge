import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="portfolio">
      <Header />
      <div className='about-me'>
        <p>
          Hi, I'm Marina, 
          <br />
          a full stack developer who just completed a coding bootcamp with UCF.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default App;
