import  { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ResearchPublications from './ResearchPublications';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import Patents from './components/Patents';
import Reviewer from './components/Reviewer';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [patentView, setPatentView] = useState('uk');

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
      case 'Profile':
        return <Home setActiveTab={setActiveTab} />;
      case 'Publications':
        return <ResearchPublications />;
      case 'Images':
        return <Gallery />;
      case 'Awards':
        return <Awards />;
      case 'Patents':
        return <Patents defaultTab={patentView} />;
      case 'Reviewer':
        return <Reviewer />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          if (tab === 'Patents') {
            setPatentView('uk');
          }
        }}
      />
      <main className="content-area">
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} setPatentView={setPatentView} />
    </div>
  );
}

export default App;
