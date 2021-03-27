import { useState } from 'react'
import initialState from '../initialState'

function useInitialState() {
	const [state, setState] = useState(initialState);

	const addToCart = payload => {
		setState({
			...state,
			cart: [...state.cart, payload]
		})
	}

	const removeFromCart = (payload, indexToRemove) => {
		setState({
			...state,
			cart: state.cart.filter((item, index) => item.id !== payload.id || index !== indexToRemove)
		})
	}

	const addToBuyer = (payload) => {
		setState({
			...state,
			buyer: [...state.buyer, payload]
		})
	}

	return {
		addToCart,
		removeFromCart,
		addToBuyer,
		state
	}
}

export default useInitialState;