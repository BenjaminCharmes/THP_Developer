import React from 'react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useUserStore } from '../contexts/UserContext'

export const WriteArticle = observer(() => {

  const userStore = useUserStore()
  console.log(userStore.getUserID())

  const [article, setArticle] = useState({
    title: "",
    content: "",
    user_id: 1,
  });  
  
  function handleChange (e) {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
    console.log(article)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setArticle({
      ...article,
      user_id: userStore.getUserID(),
    })

    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    })
  }
  
  return (
    <form>
      <label>
        Title:
        <input type="text" name="title" onChange={handleChange} />
      </label>
      <label>
        Content:
        <input type="text" name="content" onChange={handleChange} />
      </label>
      <button type='submit' onClick={handleSubmit}>
        Poster l'article
      </button>
    </form>
  )
})
