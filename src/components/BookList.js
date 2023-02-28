import BookShow from './BookShow'

//got to receive all the props
function BookList({books, onDelete}) {
    const renderedBooks = books.map((book) => {return <BookShow onDelete={onDelete} key={book.id} book={book}/>;});

    //renderedBooks is the list of books made by react.
    //each element of the array is a BookShow element with key and book "feature?/prop? its props"

    return <div className='book-list'>{renderedBooks}</div>;

}

export default BookList;