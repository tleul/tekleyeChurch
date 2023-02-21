import React, { Fragment } from 'react';
import Landing from './componets/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './componets/layout/NavbarComponent';
import PaymentProcess from './componets/Payment/PaymentProcess ';
import Successpayment from './componets/Payment/Successpayment';
import './App.css';
import {} from 'dotenv/config';
const App = () => {
	return (
		<Router>
			<Fragment>
				<NavbarComponent />
				<Container>
					<Route exact path='/' component={Landing} />
					<Route exact path='/' component={PaymentProcess} />

					<Switch>
						<Route
							exact
							path='/paymentsuccess'
							component={Successpayment}
						/>
					</Switch>
				</Container>
			</Fragment>
		</Router>
	);
};

export default App;
