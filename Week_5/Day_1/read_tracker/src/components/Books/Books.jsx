import React, { useState, useEffect } from 'react';
import Book from '../Book/Book';

const url = "https://gist.githubusercontent.com/MathisDYKDan/76bc73ec77481ccb82677cc7c0d8b524/raw/a23c99027b9bfc1bfdb22e22ddcb4301a5f870ee/books.json";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    async function fetchData() {
      let dataFromLocalStorage = [];
      for (let i = 0; i < localStorage.length; i++) {
        dataFromLocalStorage.push(JSON.parse(localStorage.getItem(i)));
      }
      if (dataFromLocalStorage.length > 0) {
        setBooks(dataFromLocalStorage);
      } else {
        const response = await fetch(url);
        const data = await response.json();
        setBooks(data.books[0]);
        data.books[0].forEach((book, index) => {
          localStorage.setItem(index, JSON.stringify(book));
        })
      }
    }
    fetchData();
  }, []);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  let filteredBooks = books;
  if (filter === 'favorite') {
    filteredBooks = books.filter(book => book.isFavorite);
  } else if (filter === 'toRead') {
    filteredBooks = books.filter(book => book.toRead);
  }

  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      <br />
      <br />
      <button value="all" onClick={handleFilterChange}>Tous les livres</button>
      <button value="favorite" onClick={handleFilterChange}>Livres favoris</button>
      <button value="toRead" onClick={handleFilterChange}>Livres à lire</button>
      {filteredBooks.map((book, index) => (
        <Book data={book} index={index} key={index} />
      ))}
    </>
  );
};

export default Books;
