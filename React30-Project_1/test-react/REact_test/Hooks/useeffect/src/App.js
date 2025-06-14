import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    //code
    //componentDidMount
console.log("component is mounted")

//add event listener
//doucment title
// db/socket connect
//network request
//graphql subscription

return()=>{ //cleanup function // componentwillUnmount
console.log("component will unmount");
}
  },[]);
  return (
    <div className="App">App</div>
  );
}

export default App;
