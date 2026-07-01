import { Link } from "react-router-dom";
import { Home } from "../pages/Home";
import './Header.css'

export function Header() {

  return (
    <div className="header">
      <Link to="/" className="header-title">Exercicios</Link>
      <div className="menu">
        <Link to='/Exercicio1'>Exercicio 1</Link>
      </div>
    </div>
  )
}