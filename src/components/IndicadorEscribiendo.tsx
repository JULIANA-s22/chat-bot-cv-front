export default function IndicadorEscribiendo() {
  return (
    <div className="mensaje mensaje--bot">
      <div className="mensaje__avatar">🤖</div>
      <div className="mensaje__burbuja burbuja--bot indicador">
        <span className="punto"></span>
        <span className="punto"></span>
        <span className="punto"></span>
      </div>
    </div>
  );
}
