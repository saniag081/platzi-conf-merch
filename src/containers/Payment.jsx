import React from 'react'
import '../styles/components/Payment.css'

export default function Payment() {
	return (
		<div className="Payment">
			<div className="Payment-content">
				<h3>Resumen del pedido:</h3>
				<div className="Payment-botton">
					Boton de pago con Paypal
				</div>
			</div>
		</div>
	)
}