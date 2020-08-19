import React, { Fragment } from 'react';
import Landing from './componets/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import NavbarComponent from './componets/layout/NavbarComponent';
import PaymentProcess from './componets/Payment/PaymentProcess ';
import './App.css';
const App = () => {
	return (
		<Router>
			<Fragment>
				<NavbarComponent />
				<Container>
					<Landing />

					<PaymentProcess />
				</Container>
			</Fragment>
		</Router>
	);
};

export default App;
