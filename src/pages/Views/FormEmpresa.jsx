import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormEmpresas = ({ formDataE }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [empresas, setEmpresas] = useState([]);
  const [actividades, setActividades] = useState([]);
  const [medios, setMedios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [prioridades, setPrioridades] = useState([]);
  const [usos, setUsos] = useState([]);
  const [estados, setEstados] = useState([]);
  const [errores, setErrores] = useState([]);
  const [tipoErrores, setTipoErrores] = useState([]);

  useEffect(() => {
    fetch('api/empresa') // Replace with your API endpoint to fetch 
      .then(response => response.json())
      .then(data => setEmpresas(data))
      .catch(error => console.error(error));

    fetch('api/actividades') // Replace with your API endpoint to fetch 
      .then(response => response.json())
      .then(data => setActividades(data))
      .catch(error => console.error(error));

    fetch('api/medios') // Replace with your API endpoint to fetch
      .then(response => response.json())
      .then(data => setMedios(data))
      .catch(error => console.error(error));

    fetch('api/usuarios') // Replace with your API endpoint to fetch
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error(error));

    fetch('api/prioridades') // Replace with your API endpoint to fetch
      .then(response => response.json())
      .then(data => setPrioridades(data))
      .catch(error => console.error(error));

    fetch('api/usos') // Replace with your API endpoint to fetch
      .then(response => response.json())
      .then(data => setUsos(data))
      .catch(error => console.error(error));

    fetch('api/estados') // Replace with your API endpoint to fetch
      .then(response => response.json())
      .then(data => setEstados(data))
      .catch(error => console.error(error));

    fetch('api/erorres') // Replace with your API endpoint to fetch
      .then(response => response.json())
      .then(data => setErrores(data))
      .catch(error => console.error(error));

    fetch('api/tipoErorres') // Replace with your API endpoint to fetch
      .then(response => response.json())
      .then(data => setTipoErrores(data))
      .catch(error => console.error(error));

    if (formDataE) {
      reset(formDataE);
    }
  }, [formDataE, reset]);

  const onSubmit = (data) => {
    fetch('api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className=" grid grid-cols-2 w-full h-full ">
      <img className='px-4 py-4 rounded' src="https://www.cump.edu.mx/wp-content/uploads/2019/09/e34f0e1c02fdcca3c7fab2bae7fa299d-scaled.jpg" />
      {

        <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto grid grid-cols-2 gap-4 px-1 py-1 w-full h-full ">

          <div className="mb-1 col-span-2">
            <label htmlFor="peticion" className="block mb-1">Nombre</label>
            <input {...register('peticion', { required: true })} id="peticion" placeholder="Petición" className="border border-gray-300 rounded px-3 py-2 w-full" />
            {errors.peticion && <span className="text-red-500">El campo es requerido.</span>}
          </div>

          <div className="mb-1 col-span-2">
            <label htmlFor="peticion" className="block mb-1">Numero Telefonico</label>
            <input {...register('peticion', { required: true })} id="peticion" placeholder="Petición" className="border border-gray-300 rounded px-3 py-2 w-full" />
            {errors.peticion && <span className="text-red-500">El campo es requerido.</span>}
          </div>

          <div className="mb-1 col-span-2">
            <label htmlFor="peticion" className="block mb-1">Direccion</label>
            <input {...register('peticion', { required: true })} id="peticion" placeholder="Petición" className="border border-gray-300 rounded px-3 py-2 w-full" />
            {errors.peticion && <span className="text-red-500">El campo es requerido.</span>}
          </div>

          <div className='py-11 mt-9' >
            <button type="submit" className="bg-teal-500 text-white rounded h-10 w-28">Guardar</button>
          </div>
        </form>
      }
    </div>
  );
};


export default FormEmpresas;

