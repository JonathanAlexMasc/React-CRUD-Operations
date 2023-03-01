import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios'

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    //response contains list of books that we can use to update our state
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, 
    {
      title: newTitle,
    });

    //console.log(response);

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: response.data.title };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {
    
    await axios.delete(`http://localhost:3001/books/${id}`);
    
    
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  //async network request, await because it takes time for server response
  const createBook = async (title) => {
    
    const response = await axios.post('http://localhost:3001/books', {
      title: title
    });
    
    //new array updatedBooks contains data from previous plus newly made data from response
    const updatedBooks = [
      ...books, response.data
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
