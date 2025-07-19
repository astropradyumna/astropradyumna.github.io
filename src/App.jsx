import { useState } from 'react'
import Header from './components/Header'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Resources from './components/Resources'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch(currentPage) {
      case 'resources':
        return (
          <>
            <Header onPageChange={setCurrentPage} />
            <Resources />
          </>
        );
      case 'contact':
        return (
          <>
            <Header onPageChange={setCurrentPage} />
            <Contact />
          </>
        );
      case 'home':
      default:
        return (
          <>
            <Header onPageChange={setCurrentPage} />
            <section className="hero">
              <div className="hero-content">
                <h1>Pradyumna Sadhu</h1>
                <p className="description">Graduate student in Dept. of Physics and Astronomy at University of California, Riverside.</p>
                
                <div className="profile-section">
                  <img src="/src/assets/me.jpg" alt="Prady" className="profile-image" />
                </div>

                <div className="about-section">
                  <h2>About me</h2>
                  <p className="about-text">
                    I am currently working with Prof. Laura Sales to understand the nature of dark matter and galaxy formation using dwarf galaxies as probes. We are currently making predictions for what upcoming surveys like Vera Rubin and Roman telescopes should be seeing when they start probing the "faint universe". Towards this end, we leverage the combined power of cosmological simulations and semi-analytic models. Our first results indicate that there must be 10,000 to 100,000 dwarf galaxies in a Virgo like cluster. While cosmological simulations tend to not resolve the low mass galaxies because of numerical effects, semi-analytic models come to rescue!
                  </p>
                  
                  <div className="research-plot">
                    <img src="/src/assets/niusha_plot.png" alt="Research predictions" className="plot-image" />
                    <figcaption className="plot-caption">
                      Plot above shows a thin slice of one of the galaxy clusters taken from IllustrisTNG simulation. <em>Left panel</em>: The dwarf galaxies as predicted by the simulation. <em>Center and right panels</em> show galaxies which have been lost in the simulation because of lack of sufficient resolution, and see how many! We use two abundance matching relations to populate the dark subhalos of the simulation -- Power law (center) and Cutoff (right), because we do not fully understand yet how stars populate dark subhalos in the low mass regime.
                    </figcaption>
                  </div>
                </div>
              </div>
            </section>
            <Timeline />
          </>
        );
    }
  };

  return renderPage();
}

export default App
