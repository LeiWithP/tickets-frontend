import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField } from "../../components/TextField/TextField";
import axios from "axios";
import API_ROUTE from "../../routes/ApiRoute";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${API_ROUTE}register/`,
        {
          username: username,
          password: password,
          email: email,
          first_name: first_name,
          last_name: last_name,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-random-image bg-cover bg-no-repeat">
      <div className="rounded-xl bg-tertiary bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="src/images/gaytan-title.png" width="150" alt="" />
            <br></br>
            <h2 className="mb-2 text-2xl">Registrarse</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <TextField
              type="text"
              placeholder="Nombre de Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              type="text"
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="text"
              placeholder="Nombre(s)"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              type="text"
              placeholder="Apellidos"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              type="Password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="flex-grow-0 w-5/6 rounded-3xl bg-secondary bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-extra"
              >
                Registrarse
              </button>
            </div>
          </form>
          <div className="mt-8 flex justify-center text-lg text-black">
            <button
              type="button"
              onClick={handleLogin}
              className="flex-grow-0 w-5/6 rounded-3xl bg-primary bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-extra"
            >
              Ingresar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
