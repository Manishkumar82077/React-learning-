function ToDoItem2() {
  let toDoName = "Buy Milk";
  let date = "23/09/2023";
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">{toDoName}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button type="button" class="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default ToDoItem2;
