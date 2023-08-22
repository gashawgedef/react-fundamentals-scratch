import logo from './logo.svg';
import './App.css';
import Great from './components/Great';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Gallery from './components/Profile';

function App() {
  return (
    <div className="App">
      <Great name="Gashaw Gedef " address="Addis Ababa" >
      <p>This is Children</p>
      </Great>
      <Great name="Shibabaw " address="Gondar, Ethiopia">
        this is children two
      </Great>
      <Great name="Tadege " address="Debre Birhan">
      this is children three
      </Great>
      {/* <Welcome/>
      <Hello/>
      <Gallery/> */}
    
    </div>
  );
}

export default App;
