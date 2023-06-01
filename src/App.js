import logo from './logo.svg';
import './App.css';
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterThree from './component/HookCounterThree';
import HookCounterFour from './component/HookCounterFour';
import EffectCounter from './component/EffectCounter';

function App() {
  return (
    <div className="App">
      <EffectCounter/>
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
    </div>
  );
}

export default App;
