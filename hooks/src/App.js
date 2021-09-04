import './App.css';
import EffectCounter from './components/EffectCounter';
import FetchData from './components/FetchData';
import HookCounter from './components/HookCounter';
import HooksMouse from './components/HooksMouse';
import MouseContainer from './components/MouseContainer';
import ReducerCount from './components/ReducerCount';

// export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <HookCounter/> */}
      {/* <HooksMouse/> */}
      {/* <MouseContainer/> */}
      {/* <EffectCounter/> */}
      {/* <FetchData/> */}
      {/* <UserContext.Provider value={'John'}>
        <CompC />
      </UserContext.Provider> */}
      <ReducerCount/>
    </div>
  );
}

export default App;
