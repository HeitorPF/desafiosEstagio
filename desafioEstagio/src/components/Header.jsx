import { Link } from "react-router-dom";
import { Home } from "../pages/Home";
import './Header.css'

export function Header() {

  return (
    <div className="header">
      <Link to="/" className="header-title">EXERCÍCIOS</Link>
      <div className="menu">
        <Link className="menu-exercise" to='/Exercicio1'>EXERCÍCIO 1</Link>
        <Link className="menu-exercise" to='/Exercicio2'>EXERCÍCIO 2</Link>
        <Link className="menu-exercise" to='/Exercicio3'>EXERCÍCIO 3</Link>
      </div>
    </div>
  )
}