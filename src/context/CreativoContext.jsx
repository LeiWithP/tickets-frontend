import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CreativoContext = createContext();

export function CreativoContextProvider(props) {

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
      axios
        .get("https://gaytan-tickets-api.onrender.com/api/tickets/")
        .then((response) => setTickets(response.data))
        .catch((error) => console.log(error));
    }, []);

  return (
    <CreativoContext.Provider value={{
        tickets
    }}>
      {props.children}
    </CreativoContext.Provider>
  );
}
