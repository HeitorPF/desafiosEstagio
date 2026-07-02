import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import './Home.css'

export function Home() {

  return (
    <>
      <Header />

      <main>
        <div>
          <h2>Exercício 1</h2>
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

        <div>
          <h2>Exercicio 2</h2>

          <p>
            Desenvolver um sistema que receba uma sequência de números digitada pelo usuário. O
            primeiro valor informado será a quantidade de números a ser digitada, e em seguida, a
            sequência de números. No final o sistema deverá apresentar:
          </p>
          <ul>
            <li>A própria sequência digitada pelo usuário.</li>
            <li>O menor e o maior número da sequência.</li>
          </ul>

          <Link to='/exercicio2'>
            Ir para solução
          </Link>
        </div>

        <div>
          <h2>Exercicio 3</h2>

          <p>
            Os números de Fibonacci formam uma sequência em que cada número é igual à soma
            dos dois anteriores. Os dois primeiros números são, por definição, iguais a 1. Veja o
            exemplo a seguir: 1 1 2 3 5 8 13 ...
            Escreva um programa que carregue um valor N pelo teclado e:
          </p>

          <ul>
            <li>Imprima os N primeiros números da sequência de Fibonacci</li>
            <li>Indique se N faz parte da sequência de Fibonacci</li>
          </ul>

          <Link to='/exercicio3'>
            Ir para solução
          </Link>
        </div>
      </main>


    </>
  )
}