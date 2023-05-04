import axios from "axios";
import API_ROUTE from "./ApiRoute";

export const getPrioridades = async () => {
  const response = await axios.get(`${API_ROUTE}prioridades/`);
  return response.data;
};

export const getEstados = async () => {
  const response = await axios.get(`${API_ROUTE}estados/`);
  return response.data;
};

export const getActividades = async () => {
  const response = await axios.get(`${API_ROUTE}actividades/`);
  return response.data;
};

export const getUsos = async () => {
  const response = await axios.get(`${API_ROUTE}usos/`);
  return response.data;
};

export const getFrecuencias = async () => {
  const response = await axios.get(`${API_ROUTE}frecuencias/`);
  return response.data;
};

export const getDuraciones = async () => {
  const response = await axios.get(`${API_ROUTE}duraciones/`);
  return response.data;
};

export const getDias = async () => {
  const response = await axios.get(`${API_ROUTE}dias/`);
  return response.data;
};

export const getMediosOrigen = async () => {
  const response = await axios.get(`${API_ROUTE}medios-origen/`);
  return response.data;
};

export const getErrores = async () => {
  const response = await axios.get(`${API_ROUTE}errores/`);
  return response.data;
};

export const getTiposError = async () => {
  const response = await axios.get(`${API_ROUTE}tipos-error/`);
  return response.data;
};