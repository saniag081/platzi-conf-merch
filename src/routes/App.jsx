import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Homa'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Succes from '../containers/Succes'
import NotFound from '../containers/NotFound'
import Layout from '../components/Layout'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'

export default function App() {
	const initialState = useInitialState()
	return (
	<AppContext.Provider value={initialState}>
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/checkout/information" component={Information} />
					<Route exact path="/checkout/payment" component={Payment} />
					<Route exact path="/checkout/succes" component={Succes} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	</AppContext.Provider>
	)
}