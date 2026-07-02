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
      setValue('')
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
      if (n > maiorTemp) {
        maiorTemp = n
      }
      if (n < menorTemp) {
        menorTemp = n
      }
    })
    setMaior(maiorTemp)
    setMenor(menorTemp)
  }

  return (
    <>
      <Header />

      <main>
        <h2>Exercício 2</h2>

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
          Adicionar número à sequência
        </button>
        <button
          id="resetar-button"
          onClick={resetar}
        >
          Resetar
        </button>


        <div>
          <p>Sequência digitada:</p>
          <div className="sequence">
            {sequencia.map((n, i) => {
              return (
                <span key={i} className="sequence-numbers">{n}</span>
              )
            })}
          </div>

        </div>

        <button
          onClick={calcularMaiorMenor}
          className="calcular-button"
        >
          Calcular
        </button>

        <h3>Resultado</h3>
        <ul>
          <li>Menor: {menor}</li>
          <li>Maior: {maior}</li>
        </ul>
      </main>
    </>
  )
}