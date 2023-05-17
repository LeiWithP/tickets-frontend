import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const FormComponent = ({ formData }) => {
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

    if (formData) {
      reset(formData);
    }
  }, [formData, reset]);

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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">

      <div className="mb-4">
        <label htmlFor="peticion" className="block mb-1">Petición</label>
        <input {...register('peticion', { required: true })} id="peticion" placeholder="Petición" className="border border-gray-300 rounded px-3 py-2 w-full" />
        {errors.peticion && <span className="text-red-500">El campo es requerido.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="empresa" className="block mb-1">Empresa</label>
        <select {...register('empresa', { required: true })} id="empresa" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona una Empresa</option>
          {empresas.map(empresa => (
            <option key={empresa.id} value={empresa.id}>{empresa.name}</option>
          ))}
        </select>
        {errors.empresa && <span className="text-red-500">Por favor selecciona una empresa.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="actividad" className="block mb-1">Actividad</label>
        <select {...register('actividad', { required: true })} id="actividad" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona una Actividad</option>
          {actividades.map(actividad => (
            <option key={actividad.id} value={actividad.id}>{actividad.name}</option>
          ))}
        </select>
        {errors.actividad && <span className="text-red-500">Por favor selecciona una actividad.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="uso" className="block mb-1">Uso</label>
        <select {...register('uso', { required: true })} id="uso" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona una opción</option>
          {usos.map(uso => (
            <option key={uso.id} value={uso.id}>{uso.name}</option>
          ))}
        </select>
        {errors.uso && <span className="text-red-500">Por favor selecciona una opción.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="medio" className="block mb-1">Medio de Origen</label>
        <select {...register('medio', { required: true })} id="medio" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona un Medio de Origen</option>
          {medios.map(medio => (
            <option key={medio.id} value={medio.id}>{medio.name}</option>
          ))}
        </select>
        {errors.medio && <span className="text-red-500">Por favor selecciona un medio de origen.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="levanta" className="block mb-1">Levanta Ticket</label>
        <select {...register('levanta', { required: true })} id="levanta" className="border border-gray-300 rounded px-3 py-2 w-full" disabled>
          <option value="">Selecciona un usuario</option>
          {usuarios.map(usuario => (
            <option key={usuario.id} value={usuario.id}>{usuario.name}</option>
          ))}
        </select>
        {errors.levanta && <span className="text-red-500">Por favor selecciona un usuario.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="solicita" className="block mb-1">Cliente Solicita</label>
        <select {...register('solicita', { required: true })} id="solicita" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona un usuario</option>
          {usuarios.map(usuario => (
            <option key={usuario.id} value={usuario.id}>{usuario.name}</option>
          ))}
        </select>
        {errors.solicita && <span className="text-red-500">Por favor selecciona un usuario.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="fechaLimite" className="block mb-1">Fecha Limite</label>
        <input {...register('fechaLimite', { required: true })} id="fechaLimite" type="date" className="border border-gray-300 rounded px-3 py-2 w-full" />
        {errors.fechaLimite && <span className="text-red-500">El campo es requerido.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="fechaEntrega" className="block mb-1">Fecha Entrega</label>
        <input {...register('fechaEntrega', { required: true })} id="fechaEntrega" type="date" className="border border-gray-300 rounded px-3 py-2 w-full" defaultValue={formData?.fechaEntrega} />
        {errors.fechaEntrega && <span className="text-red-500">El campo es requerido.</span>}
      </div>
    
      <div className="mb-4">
        <label htmlFor="prioridad" className="block mb-1">Prioridad</label>
        <select {...register('prioridad', { required: true })} id="prioridad" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona una prioridad</option>
          {prioridades.map(prioridad => (
            <option key={prioridad.id} value={prioridad.id}>{prioridad.name}</option>
          ))}
        </select>
        {errors.prioridad && <span className="text-red-500">Por favor selecciona una prioridad.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="estado" className="block mb-1">Estado</label>
        <select {...register('estado', { required: true })} id="estado" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona un estado</option>
          {estados.map(estado => (
            <option key={estado.id} value={estado.id}>{estado.name}</option>
          ))}
        </select>
        {errors.estado && <span className="text-red-500">Por favor selecciona un estado.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="fechaSolicitud" className="block mb-1">Fecha Solicitud</label>
        <input {...register('fechaSolicitud', { required: true })} id="fechaSolicitud" type="date" className="border border-gray-300 rounded px-3 py-2 w-full" />
        {errors.fechaSolicitud && <span className="text-red-500">El campo es requerido.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="ubicacion" className="block mb-1">Ubicacion Server</label>
        <input {...register('ubicacion', { required: true })} id="ubicacion" placeholder="Ubicacion Server" className="border border-gray-300 rounded px-3 py-2 w-full" />
        {errors.ubicacion && <span className="text-red-500">El campo es requerido.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="encargado" className="block mb-1">Encargado</label>
        <select {...register('encargado', { required: true })} id="encargado" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona un usuario</option>
          {usuarios.map(usuario => (
            <option key={usuario.id} value={usuario.id}>{usuario.name}</option>
          ))}
        </select>
        {errors.encargado && <span className="text-red-500">Por favor selecciona un usuario.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="apoyo" className="block mb-1">Apoyo</label>
        <select {...register('apoyo', { required: true })} id="apoyo" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona un usuario</option>
          {usuarios.map(usuario => (
            <option key={usuario.id} value={usuario.id}>{usuario.name}</option>
          ))}
        </select>
        {errors.apoyo && <span className="text-red-500">Por favor selecciona un usuario.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="notas" className="block mb-1">Notas del Cliente</label>
        <input {...register('notas', { required: true })} id="notas" placeholder="Notas del Cliente" className="border border-gray-300 rounded px-3 py-2 w-full" />
        {errors.notas && <span className="text-red-500">El campo es requerido.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="correciones" className="block mb-1">Correciones</label>
        <input {...register('correciones', { required: true })} id="correciones" placeholder="Correciones del Cliente" className="border border-gray-300 rounded px-3 py-2 w-full" />
        {errors.correciones && <span className="text-red-500">El campo es requerido.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="error" className="block mb-1">Error</label>
        <select {...register('error', { required: true })} id="error" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona un error</option>
          {errores.map(error => (
            <option key={error.id} value={error.id}>{error.name}</option>
          ))}
        </select>
        {errors.error && <span className="text-red-500">Por favor selecciona un error.</span>}
      </div>

      <div className="mb-4">
        <label htmlFor="tipoError" className="block mb-1">Tipo Error</label>
        <select {...register('tipoError', { required: true })} id="tipoError" className="border border-gray-300 rounded px-3 py-2 w-full">
          <option value="">Selecciona un Tipo Error</option>
          {tipoErrores.map(tipoError => (
            <option key={tipoError.id} value={tipoError.id}>{tipoError.name}</option>
          ))}
        </select>
        {errors.tipoError && <span className="text-red-500">Por favor selecciona un Tipo Error.</span>}
      </div>


      <button type="submit" className="bg-gray-600 text-black rounded px-4 py-2">Guardar</button>
    </form>
  );
};

export default FormComponent;

