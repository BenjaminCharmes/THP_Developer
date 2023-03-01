import { observer } from 'mobx-react-lite'
import React from 'react'
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const HomePage = observer(() => {

  const [articles, setArticles] = useState([])

  const loadArticle = async () => {
    fetch('http://localhost:3000/', {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setArticles(response)
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    loadArticle()
  }, [])

  return (
    <>
    {articles.map((article, index) => (
      <Card style={{ width: '18rem', margin: '10px' }} key={index}>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>{article.content}</Card.Text>
          <Button variant="primary">Editer</Button>
        </Card.Body>
      </Card>
    ))}
    </>
  )
})
