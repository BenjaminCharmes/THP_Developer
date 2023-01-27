import React from 'react';
import { faker } from '@faker-js/faker';
import Customer from '../Customer/Customer';

const Customers = () => {
  const customersList = Array.from({ length: 100 }, () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    image: faker.image.avatar(),
  }));

  return (
    <>
      {customersList.map((customerData) => (
        <Customer data={customerData} key={customerData.id} />
      ))};
    </>
  );
};

export default Customers;