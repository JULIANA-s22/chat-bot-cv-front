import { useEffect, useRef } from 'react';
import { useChat } from '../hooks/useChat';
import BurbujaMensaje from './BurbujaMensaje';
import IndicadorEscribiendo from './IndicadorEscribiendo';
import EntradaChat from './EntradaChat';

export default function Chat() {
  const { mensajes, cargando, enviar } = useChat();
  const refFinal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    refFinal.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes, cargando]);

  const sugerencias = [
    '¿Cuál es su experiencia laboral?',
    '¿Qué tecnologías maneja?',
    '¿Cuál es su formación académica?',
  ];

  return (
    <div className="chat">
      <header className="chat__header">
        <div className="chat__header-info">
          <p>Asistente virtual de Carlos Gómez, puedes realizarle preguntas sobre su perfil profesional.</p>
        </div>
      </header>

      <div className="chat__mensajes">
        {mensajes.map((msg) => (
          <BurbujaMensaje key={msg.id} mensaje={msg} />
        ))}
        {cargando && <IndicadorEscribiendo />}

        {mensajes.length === 1 && (
          <div className="sugerencias">
            {sugerencias.map((s) => (
              <button key={s} className="sugerencia" onClick={() => enviar(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        <div ref={refFinal} />
      </div>

      <EntradaChat onEnviar={enviar} deshabilitado={cargando} />
    </div>
  );
}
