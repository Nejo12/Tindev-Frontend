import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import './sass/styles.scss';
import NavBar from './components/NavBar'
import Landing from './screens/Landing'
import Footer from './components/Footer'
import EmailVerification from './screens/EmailVerification';

const App = () => (
	<Router>
		<NavBar />
		<main className="py-3">
			<Container>
				<Route path='/' component={Landing} exact />
				<Route path='/verify' component={EmailVerification} />
			</Container>
		</main>
		<Footer />
	</Router>
);

export default App;
