import item from "./item";

functon FoodItem(){
    let foodItem = ["Dragon fruit", "Banana", "green vagetable", "Rice", "Apple"];
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul className="list-group">
        {foodItem.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul> 
    </React.Fragment>
  );
}
expot 
