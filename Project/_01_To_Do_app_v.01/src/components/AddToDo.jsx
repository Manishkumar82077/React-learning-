function AddToDo() {
  const inputStyles = {
    backgroundColor: "white", // Change to 'transparent' if you want a transparent background
    color: "black", // Change text color if needed
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter ToDo here"
            style={inputStyles}
          />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" style={inputStyles} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
