import carrito from '../assets/imagenes/carritologo.png';
import "./carritocomponent.css"

export default function  CarritoComponent (){
return (
        <div className="carrito-container">
                <img
                src= {carrito}
                alt ="carritoimg"
                className="carrito-button"
                onClick={() => alert("¡Carrito clickeado!")}>
                </img>
        </div>
        )
}