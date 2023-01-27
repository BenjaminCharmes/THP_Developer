import React from 'react';
import Email from '../Email/Email';
import Phone from '../Phone/Phone';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Customer = (props) => {
  const { firstName, lastName, phoneNumber, image } = props.data;

  return (
    <div className="col-4 mb-4 mx-3" style={{ width: '18rem' }}>
      <Card>
        <Card.Img variant="top" style={{ width: '100%' }} src={`${image}`} />
        <Card.Body className="text-center">
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Button variant="dark"><Email data={props.data} /></Button>
          &nbsp;
          <Button variant="dark"><Phone data={props.data} /></Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Customer;
