import './App.css';
import TopBar from './components/header/TopBar.jsx';
import MainSlider from './components/MainSlider';
import Advantages from './components/advantages/Advantages';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
        <TopBar />
        <div className='main_content'>
          <MainSlider />
          <Advantages />
          <Services />
        </div>
    </div>
  );
}

export default App;
