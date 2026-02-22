import  Navbar  from './components/Navbar.tsx';
import { LandingPage } from './pages/LandingPage';
import  Features  from './pages/Features';
import About from './pages/about';

function App() {
  return (
    <div className="min-h-screen bg-[#011d3d]">
      <Navbar /> 

      <main>
        <LandingPage />
        <Features /> 
        <About />
      </main>
      
    </div>
  );
}

export default App;