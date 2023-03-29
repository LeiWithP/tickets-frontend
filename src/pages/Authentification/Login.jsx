import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    setIsLoading(true);
    await onClick();
    //await onSubmit();
    setIsLoading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      //const response = await axios.post("http://127.0.0.1:8000/api/login/", {
      const response = await axios.post("https://gaytan-tickets-api.onrender.com/api/login/", {
        username: username,
        password: password,
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      console.log("Logged in successfully!");
      navigate('/landing');
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleRegister = () => {
    navigate('/register');
  }

  return(
    <div className="flex h-screen w-full items-center justify-center bg-random-image bg-cover bg-no-repeat">
      
      <div className="rounded-xl bg-tertiary bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img src="src/images/gaytan-title.png" width="150" alt=""/>
            <br></br>
            <h2 className="mb-2 text-2xl">Iniciar Sesion</h2>
          </div>
          <form onSubmit={!isLoading ? handleSubmit : undefined}>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="mb-4 text-lg">
              <input className="rounded-3xl border-none bg-white bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button type="submit" className={"flex-grow-0 w-5/6 rounded-3xl bg-primary bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 " + (!isLoading ? 'hover:bg-extra' : '')} disabled={isLoading}>
                {
                  isLoading ? (
                    <div className="flex justify-center">
                      <div className="flex-grow-0 w-8 h-8 border-4 border-tertiary rounded-full animate-spin"/>
                      <p className="ml-2">cargando</p>
                    </div>
                  ) : (
                    <p>Ingresar</p>
                  )
                }
              </button>
            </div>
          </form>
          {
            isLoading ? (
              undefined
            ) : (
              <div className="mt-8 flex justify-center text-lg text-black">
              <button type="button" onClick={!isLoading ? handleRegister : undefined} className="flex-grow-0 w-5/6 rounded-3xl bg-secondary bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-extra">Registrarse</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Login;
