import { useReducer } from "react";
import {  counterReducer} from "./Reducer";

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  
    const increment = () => dispatch({ type: 'INCREMENT' });
    const decrement = () => dispatch({ type: 'DECREMENT' });
  
    return (
      <div>
        Count: {state.count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }
 export default Counter  