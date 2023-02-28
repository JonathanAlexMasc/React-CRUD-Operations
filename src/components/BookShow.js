function BookShow(props) {

    const handleClick = () => {
        props.onDelete(props.book.id);
    };


    return <div className="book-show">
        {props.book.title}
        <div className="actions">
            <button className="delete" onClick={handleClick}>
                Delete
            </button>
        </div>
    </div>;

}

export default BookShow;