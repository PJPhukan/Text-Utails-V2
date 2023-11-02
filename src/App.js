import  {useState} from 'react'
import './App.css';
import About from './Component/About';
import Navber from './Component/Navber';
import TextFrom from './Component/TextFrom';
import Alert from './Component/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const [mode, setmode] = useState('light')
const [color, setcolor] = useState('black')
const [modeText, setmodeText] = useState('Dark Mode')
const [alert, setalert] = useState(null);

const showAlert=(massage,type)=>{
  setalert({
    msg:massage,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 2000);
}

  

// document.body.style.backgroundColor='black'
const togglemode=()=>{
  if(mode==='dark'){
    setmode('light')
    setcolor('black')
    setmodeText('Dark mode')
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success")
    document.title='TextUtails - Light mode'  //change title dynamically
  }
  else{
    setmode('dark')
    setcolor('light')
    setmodeText('Light mode')
    document.body.style.backgroundColor ='#212529'
    showAlert("Dark mode has been enabled","success")
    document.title='TextUtails - Dark mode'  //change the title dynamically
  }
}

  // let btn = document.getElementById('colorbtn')
  const changcolor= () => {
    let val = document.getElementById("colr");
    document.body.style.backgroundColor = val.value;

  }



 

  return (
    <>
      <Router>

    {/* <Navber title="TextUtails" about="AboutText"/> */}
      <Navber title="TextUtails" mode={mode} color={color} togglemode={togglemode} modeText={modeText} changcolor={changcolor}/> {/* It take props from default props  */}
      <div>
      <Alert alert={alert}/>

        <Routes>
            <Route exact path="/about" element={<About />}>
            
          </Route>
            <Route exact path="/" element={<TextFrom heading="Your Text Analyzer !" color={color} showalert={showAlert} />} >
            
          </Route>
        </Routes>
      </div>
      </Router>
     {/* <About/> */}
    </>
    
  );
}

export default App;
