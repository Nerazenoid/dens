import './App.css';
import TopBar from './components/header/TopBar.jsx';
import MainSlider from './components/MainSlider';

function App() {
  return (
    <div className="App">
        <TopBar />
        <div className='main_content'>
          <MainSlider />
        </div>
    </div>
  );
}

export default App;
