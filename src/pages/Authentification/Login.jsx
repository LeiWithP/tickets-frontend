import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        username: username,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Logged in successfully!");
      // Redirect to some other page on successful login
    } catch (error) {
      console.log(error);
    }
  };

  return(
    <div class="flex h-screen w-full items-center justify-center bg-random-image bg-cover bg-no-repeat">
      
      <div class="rounded-xl bg-tertiary bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div class="text-white">
          <div class="mb-8 flex flex-col items-center">
            <img src="https://www.logo.wine/a/logo/Instagram/Instagram-Glyph-Color-Logo.wine.svg" width="150" alt="" srcset="" />
            <h1 class="mb-2 text-2xl">Gaytan Studio</h1>
            <span class="text-gray-300">Iniciar Sesion</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="mb-4 text-lg">
              <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>

            <div class="mb-4 text-lg">
              <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div class="mt-8 flex justify-center text-lg text-black">
              <button type="submit" class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function Logina() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        username: username,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Logged in successfully!");
      // Redirect to some other page on successful login
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-green-500">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
