// import Header from './Components/Header';
import PrimarySearchAppBar from './Components/Head'
import './App.css';
import TopBodyHead from './Components/TopBodyHead';
import BodyMid from './Components/BodyMid';
import LowerBody from './Components/LowerBody';

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar/>
      <TopBodyHead/>
      <BodyMid/>
      <LowerBody/>
    </div>
  );
}

export default App;
