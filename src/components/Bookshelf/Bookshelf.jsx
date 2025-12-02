// src/components/Bookshelf/Bookshelf.jsx
import { useState } from "react";

const Bookshelf = () => {
  // 2. INITIAL STATE
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
  });

  // 3a. HANDLE INPUT CHANGE
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewBook({
      ...newBook, // keep existing fields
      [name]: value, // update title or author
    });
  };

  // 3b. HANDLE FORM SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add new book to list
    setBooks([...books, newBook]);

    // Reset form fields
    setNewBook({
      title: "",
      author: "",
    });
  };

  return (
    <div className="bookshelfDiv">
      {/* FORM SECTION */}
      <div className="formDiv">
        <h3>Add a Book</h3>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={newBook.title}
              onChange={handleInputChange}
              required
            />
          </label>

          {/* Author */}
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
              required
            />
          </label>

          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* BOOK CARDS DISPLAY */}
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>{book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
