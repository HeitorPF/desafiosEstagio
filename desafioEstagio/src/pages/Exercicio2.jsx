import { useState } from "react"
import './Exercicio2.css'
import { Header } from "../components/Header"

export function Exercicio2() {
  const [digito, setDigito] = useState('')
  const [value, setValue] = useState('')
  const [sequencia, setSequencia] = useState([])

  const [maior, setMaior] = useState()
  const [menor, setMenor] = useState()

  function addNum() {
    if (sequencia.length < digito) {
      setSequencia([...sequencia, value])
    }
  }

  function resetar() {
    setDigito('')
    setValue('')
    setSequencia([])
  }

  function calcularMaiorMenor() {
    let maiorTemp = sequencia[0]
    let menorTemp = sequencia[0]
    sequencia.forEach((n) => {
      console.log(n)
      if (n > maiorTemp) {
        maiorTemp = n
      }
      if (n < menorTemp) {
        menorTemp = n
        console.log(`${n} menor que ${me}`)
      }
    })
    setMaior(maiorTemp)
    setMenor(menorTemp)
  }

  return (
    <>
      <Header />
      <h2>Exercicio 2</h2>

      <div>
        <label htmlFor="digitos">Quantidade de digitos:</label>
        <input
          type="number"
          id="digitos"
          value={digito}
          onChange={(e) => {
            const num = e.target.value
            if (num >= 0) {
              setDigito(num)
              if (num < sequencia.length) {
                console.log(sequencia.slice(0, num))
                setSequencia(sequencia.slice(0, num))
              }
            }
          }}
        />
      </div>

      <div>
        <label htmlFor="sequencia">Adicionar número a sequência:</label>
        <input
          type="number"
          id="sequencia"
          value={value}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
      </div>

      <button
        id="add-sequencia-button"
        onClick={addNum}
      >
        Adicionar numero à sequência
      </button>
      <button
        id="resetar-button"
        onClick={resetar}
      >
        Resetar
      </button>


      <p>Sequencia digitada: {sequencia}</p>

      <button
        onClick={calcularMaiorMenor}
        id="calcular-button"
      >
        Calcular
      </button>

      <h3>Resultado</h3>
      <ul>
        <li>Menor: {menor}</li>
        <li>Maior: {maior}</li>
      </ul>

    </>
  )
}