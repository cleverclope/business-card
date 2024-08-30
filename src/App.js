import logo from './logo.svg';
import './App.css';

import About from './components/About';
import Infor from './components/Infor';
import Interests from './components/Interests';
import Socials from './components/Socials';

function App() {
  return (
    <div className='App'>
      <Infor/>

      <About/>

      <Interests/>

      <Socials/>
      
    </div>
  );
}

export default App;
