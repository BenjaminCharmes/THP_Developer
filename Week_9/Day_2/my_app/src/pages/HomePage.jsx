import { observer } from 'mobx-react-lite'
import React from 'react'
import { useState, useEffect } from 'react'

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
      <div key={index}>
        <p>{article.id}</p>
        <p>{article.title}</p>
        <p>{article.content}</p>
        <button>Editer</button>
      </div>

    ))}
    </>
  )
})
