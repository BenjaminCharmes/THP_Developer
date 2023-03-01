import React from 'react'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { useUserStore } from '../contexts/UserContext'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export const WriteArticle = observer(() => {

  const userStore = useUserStore()

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
    <Form style={{ width: '50%', margin: '10px'}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" name="title" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contenu</Form.Label>
        <Form.Control type="text" name="content" onChange={handleChange} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  )
})
