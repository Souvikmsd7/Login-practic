import React from 'react';

const About = () => {
  const allabout = [
    {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 29,
    },
    {
      name: 'Souvik',
      email: 'john.doe@example.com1',
      age: 29,
    },
    {
      name: 'AMKIYO2',
      email: 'john.doe@example.com2',
      age: 40,
    },
    {
      name: 'John Doe3',
      email: 'john.doe@example.com3',
      age: 25,
    },
    {
      name: 'John Doe4',
      email: 'john.doe@example.com4',
      age: 24,
    },
  ];

  // Filter out the person with the email 'john.doe@example.com4'
  const filteredAbout = allabout.filter(person => person.email !== 'john.doe@example.com4');

  return (
    <div>
      <h1>About Us</h1>
      {filteredAbout.map((person, index) => (
        <div key={index}>
          <h2>{person.name}</h2>
          <p>Email: {person.email}</p>
          <p>Age: {person.age}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
