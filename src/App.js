import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = '#2D2727'
      document.body.style.color = '#fff'
    }else{
      setMode('light')
      document.body.style.background = '#fff'
      document.body.style.color = '#212529'
    }
  }
  return (
   <>
   <Navbar title = "Textify" aboutText = "About" mode={mode} toggleMode={toggleMode}/>
   <TextForm heading = "Play with Textify"/>
   {/* <About/> */}
   </>
  );
}

export default App;
