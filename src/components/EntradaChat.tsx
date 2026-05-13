import { useState } from 'react';

interface Props {
  onEnviar: (texto: string) => void;
  deshabilitado: boolean;
}

export default function EntradaChat({ onEnviar, deshabilitado }: Props) {
  const [texto, setTexto] = useState('');

  const manejarEnvio = () => {
    const limpio = texto.trim();
    if (!limpio || deshabilitado) return;
    onEnviar(limpio);
    setTexto('');
  };

  const manejarTecla = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      manejarEnvio();
    }
  };

  return (
    <div className="entrada">
      <input
        type="text"
        className="entrada__input"
        placeholder="Escribe tu pregunta..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={manejarTecla}
        disabled={deshabilitado}
      />
      <button
        className="entrada__boton"
        onClick={manejarEnvio}
        disabled={deshabilitado || !texto.trim()}
      >
        Enviar
      </button>
    </div>
  );
}
