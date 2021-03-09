import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Homa'
import Checkout from '../containers/Checkout'
import Information from '../containers/Information'
import Payment from '../containers/Payment'
import Succes from '../containers/Succes'
import NotFound from '../containers/NotFound'

export default function App() {
	return (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/checkout" component={Checkout} />
			<Route exact path="/checkout/information" component={Information} />
			<Route exact path="/checkout/payment" component={Payment} />
			<Route exact path="/checkout/succes" component={Succes} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
	)
}