import { useState } from 'react'
import { Header } from '../components/Header'
import './Exercicio1.css'

export function Exercicio1() {

	const [form, setForm] = useState({
		salarioHora: 0,
		horasTrabalhadas: 0,
		filhosMenores: 0
	})

	const [salarioBruto, setSalarioBruto] = useState(null)
	const [salarioFamilia, setSalarioFamilia] = useState(null)
	const [salarioLiquido, setSalarioLiquido] = useState(null)

	function calcularSalarios() {
		let salBruto = form.salarioHora * form.horasTrabalhadas
		let salFal = 0
		setSalarioBruto(salBruto)
		if (salBruto < 788) {
			salFal = 30.5 * form.filhosMenores
		}
		else if (salBruto < 1100) {
			salFal = 18.5 * form.filhosMenores
		}
		else {
			salFal = 11.9 * form.filhosMenores
		}
		setSalarioFamilia(salFal)
		setSalarioLiquido(salBruto + salFal)
	}

	function handleChange(e) {
		const key = e.target.name
		if (e.target.value >= 0) {
			setForm({
				...form,
				[key]: e.target.value
			})
		}
	}

	return (
		<>
			<Header />

			<main>
				<h2>Exercício 1</h2>

				<div>
					<label htmlFor='salarioHora'>
						Valor do salário hora:
					</label>
					<input
						type="number"
						id="salarioHora"
						name='salarioHora'
						value={form.salarioHora}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor='horasTrabalhadas'>
						Quantidade de horas trabalhadas:
					</label>
					<input
						type="number"
						name="horasTrabalhadas"
						id='horasTrabalhadas'
						value={form.horasTrabalhadas}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label htmlFor='filhosMenores'>
						Quantidade de filhos menores que 14 anos:
					</label>
					<input
						type="number"
						name="filhosMenores"
						id='filhosMenores'
						value={form.filhosMenores}
						onChange={handleChange}
					/>
				</div>

				<button
					onClick={calcularSalarios}
					className='calcular-button'
				>
					Calcular
				</button>

				<h3>Resultado:</h3>
				<ul>
					<li>Salário bruto: {salarioBruto || salarioBruto == 0 ? `R$${salarioBruto}` : ''}</li>
					<li>Salário família: {salarioFamilia || salarioFamilia == 0 ? `R$${salarioFamilia}` : ''}</li>
					<li>Salário líquido: {salarioLiquido || salarioLiquido == 0 ? `R$${salarioLiquido}` : ''}</li>
				</ul>

			</main>
		</>
	)
}