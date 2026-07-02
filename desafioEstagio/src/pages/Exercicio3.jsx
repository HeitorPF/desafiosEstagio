import { useState } from 'react'
import { Header } from '../components/Header'
import './Exercicio3.css'

export function Exercicio3() {
  const [fibonacci, setFibonacci] = useState([])
  const [fazParte, setFazParte] = useState(false)
  const [valor, setValor] = useState(0)

  function sequenciaFibonnacci(n) {
    //[1, 1, 2, 3, 5, 8, 13]
    setFazParte(false)
    let lastNum = 1
    let fib = [1, 1]
    if (n > 2) {
      for (let i = 2; i < n || lastNum < n; i++) {
        lastNum = fib[i - 2] + fib[i - 1]
        if (lastNum == n) setFazParte(true)
        fib.push(lastNum)
      }
    }
    else if (n == 1) {
      setFazParte(true)
    }
    setFibonacci(fib)
  }

  return (
    <>
      <Header />
      <main>
        <h2>Exercício 3</h2>

        <label htmlFor="valor">Digite um valor para verificar sobre a sequência de Fibonacci:</label>
        <input type="number" name="number" id="valor" value={valor} onChange={(e) => {
          if (e.target.value >= 0) {
            setValor(e.target.value)
            sequenciaFibonnacci(e.target.value)
          }
          else {
            setValor(0)
          }
        }} />


        <h3>Resultado:</h3>
        <div>
          Sequência de fibonacci até {valor} valores:
          <div className='sequence'>
            {fibonacci.map((n, i) => {
              if (i < valor) {
                return (
                  <span key={i} className='fibonacci-number'>{n}</span>
                )
              }

            })}
          </div>

        </div>
        <p>{valor} está incluso na sequência de Fibonacci? {fazParte ? 'Sim' : 'Não'}
        </p>

      </main>
    </>
  )
}