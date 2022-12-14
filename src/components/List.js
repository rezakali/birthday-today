const List = ({ people, handleDelete }) => {
  return (
    <>
      {people.map((person) => {
        const { id, Name, gender, age } = person;
        return (
          <div key={id} className="card mb-2 p-2">
            <h4>{Name} </h4>
            <div className="d-flex g-2 mb-2">
              <span className="me-3">{age} Years</span>
              {gender === "Male" ? <p className="text-danger m-0">{gender} </p> : <p className="text-success m-0">{gender} </p> }
            </div>
            <button onClick={() => handleDelete(id)} className="btn btn-danger">Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default List;
