import "./Display.module.css";
const Display = ({ children }) => {
  return (
    <>
      <div className={"calculator"}>
        <input type="text" className={"display"} id="display" />
        {children}
      </div>
    </>
  );
};
export default Display;
