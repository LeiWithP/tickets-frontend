export const makeReadable = (ticket, catalogos) => {
  const prioridades = catalogos[0];
  const estados = catalogos[1];
  const actividades = catalogos[2];
  const usos = catalogos[3];
  const mediosOrigen = catalogos[5];
  const errores = catalogos[6];
  const tiposError = catalogos[7];
  const readableTicket = {
    ...ticket,
    id: String(ticket.id),
    prioridad: prioridades[ticket.prioridad],
    estado: estados[ticket.estado],
    actividad: actividades[ticket.actividad],
    uso: usos[ticket.uso],
    medio_origen: mediosOrigen[ticket.medio_origen],
    error: errores[ticket.error],
    tipo_error: tiposError[ticket.tipo_error],
  };
  return readableTicket;
};
