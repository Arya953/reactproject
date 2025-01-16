import logo from '../assets/imagenes/logo3.png';
import './titulocomponente.css';

export default function Titulocomponente() {
  return (
    <div className="titulocomponente-container">
      <img src={logo} alt="Logo The Gym Store" className="titulocomponente-logo" />
    </div>
  );
} 