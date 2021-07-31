import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// Pages
import About from './pages/About';
import OurServices from './pages/OurServices';
import Contact from './pages/Contact';
import MovieDetail from './pages/MovieDetail';

// Components
import Nav from './components/Nav';
import GlobalStyle  from './components/GlobalStyle';

// Animation
import {AnimatePresence} from 'framer-motion';

function App() {
	const location = useLocation();

  return (
    <div className="App">
			<GlobalStyle />
			<Nav />
			<AnimatePresence exitBeforeEnter >
				<Switch location={location} key={location.pathname}>
					<Route path="/" exact>
						<About />
					</Route>
					<Route path="/services" exact>
						<OurServices />
					</Route>
					<Route path="/services/:id">
						<MovieDetail />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
    </div>
  );
}

export default App;
 