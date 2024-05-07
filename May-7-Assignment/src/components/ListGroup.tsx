
function ListGroup(){
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]; 

    return(<>
        <h1>List</h1>
                {items.length === 0 && <p> No Item Found </p>}
         <ul className="list-group">
        {items.map(item => <li className = "list-group-item"
        key={item}
        onClick={(event) => console.log(item, index)}
         >{item}</li>)}
          </ul>
    </>);
}
export default ListGroup;