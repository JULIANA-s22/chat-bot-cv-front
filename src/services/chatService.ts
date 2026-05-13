import type { PreguntaRequest, RespuestaChat } from '../types/chat';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081/api/chat';


export async function enviarPregunta(pregunta: string): Promise<string> {
  const body: PreguntaRequest = { pregunta };

  const respuesta = await fetch(`${API_URL}/preguntar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!respuesta.ok) {
    throw new Error(`Error ${respuesta.status}: No se pudo obtener respuesta`);
  }

  const data: RespuestaChat = await respuesta.json();
  return data.texto;
}
