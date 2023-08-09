const Books = ({ id, book, author, timeRead, dificult, about, deleteBook }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "20px",
      }}>
      <div>Book: {book}</div>
      <div>Author: {author}</div>
      <div>Time read: {timeRead}</div>
      <div>Dificult: {dificult}</div>
      <div>About: {about}</div>
      <button onClick={() => deleteBook(id)}>delete</button>
    </div>
  );
};

export default Books;
