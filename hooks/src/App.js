import './App.css';
import EffectCounter from './components/EffectCounter';
import FetchData from './components/FetchData';
import HookCounter from './components/HookCounter';
import HooksMouse from './components/HooksMouse';
import MouseContainer from './components/MouseContainer';
import MultiReducer from './components/MultiReducer';
import ReducerCount from './components/ReducerCount';
import ReduComplex from './components/ReduComplex';
import CompA from './components/CompA';
import CompB from './components/CompB';
import CompC from './components/CompC';
import React, { useState, useEffect,useReducer } from 'react';

// export const UserContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider 
    value={{ countState: count, countDispatch: dispatch }}
    >
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HooksMouse/> */}
      {/* <MouseContainer/> */}
      {/* <EffectCounter/> */}
      {/* <FetchData/> */}
      {/* <UserContext.Provider value={'John'}>
        <CompC />
      </UserContext.Provider> */}
      {/* <ReducerCount/> */}
      {/* <ReduComplex/> */}
      {/* <MultiReducer/> */}
      Count : {count}
      <CompA/>
      <CompB/>
      <CompC/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
