import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import Product from './Prodruct'
import '../styles/components/Products.css'

export default function Products() {
	const {state, addToCart} = useContext(AppContext)
	const { products } = state;

	const handleAddToCart = (product) => () => {
		addToCart(product)
	}

	return (
		<div className="Products">
			<div className="Products-items">
				{products.map((product) => (
					<Product key={product.id} product={product} handleAddToCart={handleAddToCart} />
				))}
			</div>
		</div>
	)
}