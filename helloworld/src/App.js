import logo from './logo.svg';
import './App.css';
import Great from './components/Great';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Gallery from './components/Profile';

function App() {
  return (
    <div className="App">
      <Great/>
      <Welcome/>
      <Hello/>
      <Gallery/>
    
    </div>
  );
}

export default App;
