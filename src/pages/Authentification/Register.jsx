import React, { useState } from 'react';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password,
        email,
        first_name,
        last_name
      })
    });

    if (response.ok) {
      //const data = await response.json();
      console.log('Registration successful');
      // Do something else here, e.g. redirect to login page
    } else {
      console.error('Registration failed:', response.statusText);
      // Display an error message to the user
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="first_name">Nombre:</label>
        <input
          type="first_name"
          id="first_name"
          value={first_name}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="last_name">Apellidos:</label>
        <input
          type="last_name"
          id="last_name"
          value={last_name}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
