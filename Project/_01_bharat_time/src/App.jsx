import "./App.css"; // Import the CSS file

import ClockContext from "./component/ClockContext";
import ClockTime from "./component/ClockTime";
import Clockheader from "./component/Clockheader";

function App() {
  return (
    <div className="main">
      <Clockheader />
      <ClockContext />
      <ClockTime />
    </div>
  );
}

export default App;
