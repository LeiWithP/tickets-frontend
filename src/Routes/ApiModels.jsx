import axios from "axios";
import API_ROUTE from "./ApiRoute";

export const getTickets = async () => {
  const response = await axios.get(`${API_ROUTE}alltickets/`);
  return response.data;
};
