import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WorksData from '../../data/WorksData/WorksData';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function NavbarWorks() {
  const worksCat = useParams();

  const [currentWorksCat, setCurrentWorksCat] = useState({items: ['⬆️ Welcome on the works page. Please, select a category ⬆️']});

  useEffect(() => {
    const foundWorks = WorksData.find((work) => ':' + work.name.toLowerCase().replace(" ", "_") === worksCat.worksCat)
    if (foundWorks) {setCurrentWorksCat(foundWorks);}
  }, [currentWorksCat]);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/works">Works</Navbar.Brand>
          <Nav className="me-auto">
            {WorksData.map((work) => (
                <Nav.Link href={`/works/:${work.name.toLowerCase().replace(" ", "_")}`} key={work.name + "test"}>{work.name}</Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
      <div>
        {currentWorksCat.items.map((work) => (
          <Col key={work}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center">{work}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </div>
    </>
  );

}

export default NavbarWorks;