import logo from './logo.svg';
import './App.css';
import Great from './components/Great';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Gallery from './components/Profile';
import Message from './components/Message';
import Counter from './components/Counter';
import PackingList from './components/PackingList';
import FunctionClick from './components/FunctionClick';

function App() {
  return (
    <div className="App">
      <Great name="Gashaw Gedef " address="Addis Ababa" >
      <p>This is Children</p>
      </Great>
      <FunctionClick/>
      {/* <Great name="Shibabaw " address="Gondar, Ethiopia">
        this is children two
      </Great>
      <Great name="Tadege " address="Debre Birhan">
      this is children three
      </Great> 
      <Message/>
      <Counter/>
       <Hello/>
      <Gallery/> */}
      <Welcome name="Gashit" address="Gondar"/>
      <PackingList/>
     
    
    </div>
  );
}

export default App;
