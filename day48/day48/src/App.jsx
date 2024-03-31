import './App.css'
import Counter from './counter/Counter'
/*
//Store : the global state 
interface CounterState {
  value:number
}
interface UserState{
  isSignedIn:boolean
}

//Actions 
const incrementByAmount ={
  type:"INCREMENT",
  payload:10
};
const decrement ={
  type:"DECREMENT"
};
//Reducers :
*/

function App() {
  return (
    <>
    <h2>
      Redux Complete Tutorial
      <Counter/>
    </h2>
      
    </>
  )
}

export default App
