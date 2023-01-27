import React from 'react';

const Phone = (props) => {
  const { phoneNumber } = props.data
  
  return (
    <a href={`tel:${phoneNumber}`}>Appeler</a>
  );
};

export default Phone;
