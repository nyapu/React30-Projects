import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Header } from './components/Header';
import { Clicker } from './components/Clicker';
function App() {
  // let  count=0;
  // const [count,setCount]=useState(0);
  const [title]=useState("clicker");
  return (
    <div className="App">
      
      
      <Header title={title} />
      <Clicker />
{/* {count}
    
      <br />
      <button onClick={()=>{
        // count=count+1;
        setCount(count+1);
          console.log(count);
      }}>Increase</button>

      <button onClick={()=>{
        // count=count+1;
        setCount(count-1);
          console.log(count);
      }}>Decrease</button> */}
      <br />
      <h2 className='nyapu-text'>Code with @Nyapu</h2>
    </div>
  );
}

export default App;
