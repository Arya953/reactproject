import { useState } from 'react'
import './App.css'
import Titulocomponente from './componentes/titulocomponente'
import NavBarComponent from './componentes/NavBar'
import GreetingComponent from './componentes/greetingcomponent'
import CarritoComponent from './componentes/carritocomponet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulocomponente />
      <CarritoComponent />
      <NavBarComponent />
      <hr />
      <GreetingComponent/>
    </>
  )
}

export default App
