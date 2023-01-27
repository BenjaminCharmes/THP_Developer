import React from 'react';

const Email = (props) => {
  const { firstName, lastName } = props.data
  
  return (
  <a href={`mailto:${lastName}.${firstName}@gmail.com`.toLocaleLowerCase()}>Email</a>
  );
};

export default Email;