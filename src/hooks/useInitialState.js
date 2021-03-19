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
		console.log(payload, indexToRemove)
	}

	return {
		addToCart,
		removeFromCart,
		state
	}
}

export default useInitialState;