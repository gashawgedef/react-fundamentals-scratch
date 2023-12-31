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
import ClassClick from './components/ClassClick';
import Toolbar from './components/Toolbar';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      
      {/* <ParentComponent/> */}
      <UserGreeting/>
      <NameList/>
       {/*  <EventBind/>
    <Great name="Gashaw Gedef " address="Addis Ababa" >
      <p>This is Children</p>
      </Great>
      <FunctionClick/>
      <ClassClick/>
      <Toolbar/> */}
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
      {/* <Welcome name="Gashit" address="Gondar"/>
      <PackingList/> */}
     
    
    </div>
  );
}

export default App;
