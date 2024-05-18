import LeftDiv from "./components/LeftDiv/LeftDiv"
import RightBottom from "./components/RightBottom/RightBottom";

import RightTopDiv from "./components/RightTopDiv/RightTopDiv"
import './index.css'


function App() {
 

  return (
    <div className="LeftDiv">
      <LeftDiv />
      <div className="rightdiv">
        <RightTopDiv />
        <RightBottom/>
      
      </div>
      
    </div>
  );
}

export default App
