import { Link } from "react-router-dom";


export function Home() {

  return (
    <>
      <h1>Exercicios Estágio</h1>

      <div>
        <h2>exercício 1</h2>
        <p>
          Desenvolver um sistema para calcular o valor que será pago a um empregado horista. O
          usuário deverá informar o valor do salário hora, a quantidade de horas trabalhadas no
          mês e a quantidade de filhos menores de 14 anos. A partir daí o sistema deve calcular o
          salário bruto, salário família e o salário líquido do empregado (salário bruto + salário
          família). Para o cálculo do salário família, levar em consideração:
        </p>

        <ul>
          <li>
            Se o salário bruto for até R$ 788,00 o salário família será de R$ 30,50 para cada
            filho.
          </li>
          <li>
            Se o salário bruto for acima de R$ 788,00 até R$ 1.100,00 o salário família será de
            R$ 18,50 por filho.
          </li>
          <li>
            Se o salário bruto for acima de R$ 1.100,00 o salário família será de R$ 11,90 por
            filho.
          </li>
        </ul>

        <Link to='/exercicio1'>
          Ir para solução
        </Link>
      </div>

    </>
  )
}