import React, { useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import AppContexxt from '../context/AppContext'
import '../styles/components/Information.css'

export default function Information() {
	const { state, addToBuyer } = useContext(AppContexxt);
	const form = useRef(null);
	const {cart} = state ;
	const handleSubmit = () => {
		const formData = new FormData(form.current)
		const buyer = {
			'name': formData.get('name'),
			'email': formData.get('email'),
			'addresd': formData.get('address'),
			'apto': formData.get('apto'),
			'city': formData.get('city'),
			'country': formData.get('country'),
			'state': formData.get('state'),
			'cp': formData.get('cp'),
			'phone': formData.get('phone')
		}
		addToBuyer(buyer)
	}
	return (
		<div className="Information">
			<div className="Information-content">
				<div className="Information-head">
					<h2>Informacion de contacto:</h2>
				</div>
				<div className="Information-form">
					<form ref={form}>
						<input type="text" placeholder="Nombre completo" name="name" />
						<input type="email" placeholder="Correo electronico" name="email" />
						<input type="text" placeholder="Dirección" name="address" />
						<input type="text" placeholder="Nombre completo" name="name" />
						<input type="text" placeholder="Apto" name="apto" />
						<input type="text" placeholder="Ciudad" name="city" />
						<input type="text" placeholder="Pais" name="country" />
						<input type="text" placeholder="Estado" name="state" />
						<input type="text" placeholder="Codigo Postal" name="cp" />
						<input type="number" placeholder="Telefono" name="phone" />
					</form>
				</div>
				<div className="Information-buttons">
					<div className="Information-back">
						<Link to='/checkout'>
							Regresar
						</Link>
					</div>
				</div>
				<div className="Information-next">
					<button type="button" onClick={handleSubmit}>
						pagar
					</button>
				</div>
			</div>
			<div className="Information-sidebar">
				<h3>Pedido :</h3>
				{cart.map((item) => (
					<div className="Information-item" key={item.title}>
						<div className="Information-element">
							<h4>{item.title}</h4>
							<span>{item.price}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}