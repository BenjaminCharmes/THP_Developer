import { useState } from 'react';

function RegisterForm() {
  const [registerData, setRegisterData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,c
    };
    
    fetch(registerUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => setRegisterData(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
