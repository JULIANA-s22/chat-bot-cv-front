import ReactMarkdown from 'react-markdown';
import type { Mensaje } from '../types/chat';

interface Props {
  mensaje: Mensaje;
}

export default function BurbujaMensaje({ mensaje }: Props) {
  return (
    <div className={`mensaje ${mensaje.esUsuario ? 'mensaje--usuario' : 'mensaje--bot'}`}>
      {!mensaje.esUsuario && <div className="mensaje__avatar">🤖</div>}
      <div className={`mensaje__burbuja ${mensaje.esUsuario ? 'burbuja--usuario' : 'burbuja--bot'}`}>
        <ReactMarkdown>{mensaje.texto}</ReactMarkdown>
      </div>
      {mensaje.esUsuario && <div className="mensaje__avatar">👤</div>}
    </div>
  );
}
