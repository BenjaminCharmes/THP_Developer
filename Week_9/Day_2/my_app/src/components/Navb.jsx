import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../contexts/UserContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navb = observer(() => {
  const userStore = useUserStore()
  console.log(userStore)

  const Logout = () => {
    userStore.logoutUser()
  }

  if (userStore.authenticated) {
    return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Mini-Blog 🌍</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
              <Nav.Link href="/article/write">Écrire un article</Nav.Link>
              <button type="submit" onClick={Logout}>se déconnecter</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  } 

  if (!userStore.authenticated) {
    return (
      <div>
        <Link to='/'>Accueil</Link>
        <Link to='/login'>Se connecter</Link>
        <Link to='/register'>S'inscrire</Link>
      </div>
    )
  }
})

export default Navb