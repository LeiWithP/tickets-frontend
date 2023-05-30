import React, { useState } from "react";
import { useForm } from "react-hook-form";
import API_ROUTE from "../../routes/ApiRoute";

const ParrillaForm = ({ onCreate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [empresas, setEmpresas] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    fetch(`${API_ROUTE}parrillas/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onCreate)} className="mx-auto w-full p-28">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label htmlFor="tema" className="block mb-1">
            Tema
          </label>
          <input
            {...register("tema", { required: true })}
            id="tema"
            placeholder="Tema"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.tema && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>

        <div>
          <label htmlFor="copy" className="block mb-1">
            Copy
          </label>
          <textarea
            {...register("copy", { required: true })}
            id="copy"
            placeholder="Copy"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.copy && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>

        <div>
          <label htmlFor="frase" className="block mb-1">
            Frase
          </label>
          <input
            {...register("frase", { required: true })}
            id="frase"
            placeholder="Frase"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.frase && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>

        <div>
          <label htmlFor="link" className="block mb-1">
            Link
          </label>
          <input
            {...register("link", { required: true })}
            id="link"
            placeholder="Link"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.link && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>

        <div>
          <label htmlFor="tipos_contenido" className="block mb-1">
            Tipos de Contenido
          </label>
          <input
            {...register("tipos_contenido", { required: true })}
            id="tipos_contenido"
            placeholder="Tipos de Contenido"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.tipos_contenido && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>

        <div>
          <label htmlFor="plataforma" className="block mb-1">
            Plataforma
          </label>
          <input
            {...register("plataforma", { required: true })}
            id="plataforma"
            placeholder="Plataforma"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.plataforma && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>

        <div>
          <label htmlFor="parrilla" className="block mb-1">
            Parrilla
          </label>
          <input
            {...register("parrilla", { required: true })}
            id="parrilla"
            placeholder="Parrilla"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.parrilla && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>

        <div>
          <label htmlFor="ticket" className="block mb-1">
            Ticket
          </label>
          <input
            {...register("ticket", { required: true })}
            id="ticket"
            placeholder="Ticket"
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
          {errors.ticket && (
            <span className="text-red-500">El campo es requerido.</span>
          )}
        </div>
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default ParrillaForm;
