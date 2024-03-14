import "./App.css";
import ButtonContainer from "./component/ButtonContainer";
import Display from "./component/Display";

function App() {
  return (
    <div className={"container"}>
      <Display>
        <ButtonContainer></ButtonContainer>
      </Display>
    </div>
  );
}
export default App;
