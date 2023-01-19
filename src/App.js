import './app.scss';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar/>
 <Home/>
    </div>
  );
}

export default App;
