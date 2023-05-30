import axios from "axios";
import API_ROUTE from "./ApiRoute";

export const getTickets = async () => {
  const response = await axios.get(`${API_ROUTE}alltickets/`);
  return response.data;
};

export const getParrillas = async () => {
  const response = await axios.get(`${API_ROUTE}parrillas/`);
  return response.data;
};

export const getTicketsParrillas = async () => {
  const response = await axios.get(`${API_ROUTE}pentradas/`);
  return response.data;
};
