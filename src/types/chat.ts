export interface Mensaje {
  id: string;
  texto: string;
  esUsuario: boolean;
  timestamp: Date;
}

export interface PreguntaRequest {
  pregunta: string;
}

export interface RespuestaChat {
  texto: string;
}
