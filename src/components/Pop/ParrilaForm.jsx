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
    <form onSubmit={handleSubmit(onCreate)} className="mx-auto w-64">
      <div className="mb-4 pt-48">
        <label htmlFor="peticion" className="block mb-1">
          Petición
        </label>
        <input
          {...register("peticion", { required: true })}
          id="peticion"
          placeholder="Petición"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        />
        {errors.peticion && (
          <span className="text-red-500">El campo es requerido.</span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="empresa" className="block mb-1">
          Empresa
        </label>
        <select
          {...register("empresa", { required: true })}
          id="empresa"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        >
          <option value="">Selecciona una Empresa</option>
          {empresas.map((empresa) => (
            <option key={empresa.id} value={empresa.id}>
              {empresa.empresa}
            </option>
          ))}
        </select>
        {errors.empresa && (
          <span className="text-red-500">
            Por favor selecciona una empresa.
          </span>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="prioridad" className="block mb-1">
          Prioridad
        </label>
        <select
          {...register("prioridad", { required: true })}
          id="prioridad"
          className="border border-gray-300 rounded px-3 py-2 w-full"
        >
          <option value="">Selecciona una prioridad</option>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baja">Baja</option>
        </select>
        {errors.prioridad && (
          <span className="text-red-500">
            Por favor selecciona una prioridad.
          </span>
        )}
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>
  );
};

export default ParrillaForm;
