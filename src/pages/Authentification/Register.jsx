import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //const response = await axios.post('http://127.0.0.1:8000/api/register/', {
      const response = await axios.post('https://gaytan-tickets-api.onrender.com/api/register/', {
        username: username,
        password: password,
        email: email,
        first_name: first_name,
        last_name: last_name,
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigate('/');
  }

  return(
    <div className="flex h-screen w-full items-center justify-center bg-random-image bg-cover bg-no-repeat">
      
      <div className="rounded-xl bg-tertiary bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="src/images/gaytan-title.png" width="150" alt=""/>
            <br></br>
            <h2 className="mb-2 text-2xl">Registrarse</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Nombre de Usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Nombre(s)" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Apellidos" value={last_name} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className="flex-grow-0 w-5/6 rounded-3xl bg-secondary bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-extra">Registrarse</button>
            </div>
          </form>
          <div className="mt-8 flex justify-center text-lg text-black">
            <button type="button" onClick={handleLogin} className="flex-grow-0 w-5/6 rounded-3xl bg-primary bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-extra">Ingresar</button>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input
  //         type="text"
  //         id="username"
  //         value={username}
  //         onChange={(event) => setUsername(event.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="email">Email:</label>
  //       <input
  //         type="email"
  //         id="email"
  //         value={email}
  //         onChange={(event) => setEmail(event.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="password">Password:</label>
  //       <input
  //         type="password"
  //         id="password"
  //         value={password}
  //         onChange={(event) => setPassword(event.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="first_name">Nombre:</label>
  //       <input
  //         type="first_name"
  //         id="first_name"
  //         value={first_name}
  //         onChange={(event) => setFirstName(event.target.value)}
  //       />
  //     </div>
  //     <div>
  //       <label htmlFor="last_name">Apellidos:</label>
  //       <input
  //         type="last_name"
  //         id="last_name"
  //         value={last_name}
  //         onChange={(event) => setLastName(event.target.value)}
  //       />
  //     </div>
  //     <button type="submit">Register</button>
  //   </form>
  // );
}

export default RegisterForm;
