import "./App.css";
import ClockContext from "./component/ClockContext";
import ClockTime from "./component/ClockTime";
import Clockheader from "./component/clockheader";

function App() {
  return (
    <>
      <Clockheader></Clockheader>
      <ClockContext></ClockContext>
      <ClockTime></ClockTime>
    </>
  );
}

export default App;
