import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Book = (props) => {
  const { 
    title,
    shortDescription,
    thumbnailUrl
  } = props.data;
    
  const index = props.index;

  const handleAddToFavorites = (index, update) => {
    const book = JSON.parse(localStorage.getItem(index));
    const updatedBook = { ...book, ...update };
    localStorage.setItem(index, JSON.stringify(updatedBook));
    console.log(localStorage)
  };
  
  const handleMarkToRead = (index, update) => {
    const book = JSON.parse(localStorage.getItem(index));
    const updatedBook = { ...book, ...update };
    localStorage.setItem(index, JSON.stringify(updatedBook));
    console.log(localStorage)
  };

  return (
    <div className="col-4 mb-4 mx-3" style={{ width: '22rem' }}>
      <Card style={{ width: '100%', height: '100%' }}>
        <Card.Img variant="top" style={{ width: '100%' }} src={`${thumbnailUrl}`} />
        <Card.Body className="text-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{shortDescription}</Card.Text>
          <Button variant="primary" onClick={() => handleAddToFavorites(index, { isFav: true })}>Ajouter aux favoris</Button>
          &nbsp;&nbsp;
          <Button variant="primary" onClick={() => handleMarkToRead(index, { read: true })}>Ajouter à lire</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Book;