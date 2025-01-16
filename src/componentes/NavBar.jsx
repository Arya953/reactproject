import ButtonComponent from "./ButtonComponent";
import "./NavBar.css";

export default function NavBarComponent(){
    return (
        <div className="parent-buttons">
            <nav className="butttons-container">
                <ButtonComponent className="buttons" texto="Fuerza" />
                <ButtonComponent className="buttons" texto="Peso Libre" />
                <ButtonComponent className="buttons" texto="Yoga y Pilates" />
            </nav>
        </div>
    );
}