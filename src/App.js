import logo from './logo.svg';
import './App.css';
import HookCounter from './component/HookCounter';
import HookCounterTwo from './component/HookCounterTwo';
import HookCounterThree from './component/HookCounterThree';
import HookCounterFour from './component/HookCounterFour';
import EffectCounter from './component/EffectCounter';
import HookMouse from './component/HookMouse';
import MouseContainer from './component/MouseContainer';
import IntervalHookCounter from './component/IntervalHookCounter';
import Datafetch from './component/DataFetch';

function App() {
  return (
    <div className="App">
      <Datafetch/>
      {/* <IntervalHookCounter/> */}
      {/* <MouseContainer/> */}
      {/* <HookMouse/> */}
      {/* <EffectCounter/> */}
      {/* <HookCounterFour/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounter/> */}
    </div>
  );
}

export default App;
