import { useState } from "react";
import '../index.css';

//onCreate name stays the same as in App.js
function BookCreate({onCreate}) { //same as searchBar
    
    const [title, setTitle] = useState('');

    //just boiler plate stuff for getting input 
    //in react
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    //prevent undesirable browser behavior
    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title); //see argument
        setTitle(''); //empty our form
    };

    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}> 
            <label>Title</label>
            <input className='input' value={title} onChange={handleChange} />
            <button className="button">Create!</button>
        </form>
    </div>

}

export default BookCreate;