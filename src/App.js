import { useState } from "react";
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'

function App(){
    //default is emptu array of books
    const [books, setBooks] = useState([]);

    //delete
    //filter does not modify existing array
    //it returns brand new array with condition

    //functions inside updatedBooks must return boolean
    //only ones which return true get passed on to new array 
    //created by filter
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id != id;  //return bool
        });

        setBooks(updatedBooks); //re-renders webpage
    };

    //event handler for book create, title is argument
    const createBook = (title) => {
        console.log('Need to add book with: ', title);

        const updatedBooks = [
            ...books, 
            {id: Math.round(Math.random() * 9999), title: title} //could also write just title
        ];

        setBooks(updatedBooks); //re-renders webpage
    }; 

    //defined an event handler called onCreate below, now 
    //we got to actually define it

    //onCreate is passed as a prop to BookCreate function
    
    //BookList - passing down list/array of books

    //BookCreate - passing down name of book to create
    return <div>
        <BookList books={books} onDelete={deleteBookById}/>
        <BookCreate onCreate={createBook} />
    </div>;


}

export default App;