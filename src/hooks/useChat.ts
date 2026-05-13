import { useState, useCallback } from 'react';
import type { Mensaje } from '../types/chat';
import { enviarPregunta } from '../services/chatService';

export function useChat() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    {
      id: 'bienvenida',
      texto: '¡Hola! Soy el asistente virtual de **Carlos Gómez**. Pregúntame sobre su experiencia, habilidades, formación o proyectos. 🚀',
      esUsuario: false,
      timestamp: new Date(),
    },
  ]);
  const [cargando, setCargando] = useState(false);

  const enviar = useCallback(async (texto: string) => {
    const mensajeUsuario: Mensaje = {
      id: Date.now().toString(),
      texto,
      esUsuario: true,
      timestamp: new Date(),
    };

    setMensajes((prev) => [...prev, mensajeUsuario]);
    setCargando(true);

    try {
      const respuesta = await enviarPregunta(texto);
      const mensajeBot: Mensaje = {
        id: (Date.now() + 1).toString(),
        texto: respuesta,
        esUsuario: false,
        timestamp: new Date(),
      };
      setMensajes((prev) => [...prev, mensajeBot]);
    } catch {
      const mensajeError: Mensaje = {
        id: (Date.now() + 1).toString(),
        texto: 'Ocurrió un error al procesar tu pregunta. Intenta de nuevo.',
        esUsuario: false,
        timestamp: new Date(),
      };
      setMensajes((prev) => [...prev, mensajeError]);
    } finally {
      setCargando(false);
    }
  }, []);

  return { mensajes, cargando, enviar };
}
