import './App.css'
import {getFunction} from "./services/APIServices"

function App() {

  function btnGetFunctionClick(){
    getFunction()
      .then(data => console.log(data))
      .catch(err => console.error(err));

  }

  return (
    <>
     <div>
      <button onclick={btnGetFunctionClick}>GET Function</button>
     </div>
    </>
  )
}

export default App
