import "./ButtonContainer.css";
function ButtonContainer() {
  let butonItem = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "/",
    "*",
  ];
  return (
    <>
      <div className={"ButtonsContainer"}>
        {butonItem.map((item) => (
          <button key={item} className={"Buttons"}>
            {item}
          </button>
        ))}
      </div>
    </>
  );
}

export default ButtonContainer;
