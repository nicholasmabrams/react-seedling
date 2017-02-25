/**
 * Developed by Nicholas Abrams. 
 * NicholasAbrams.com
 * React-seedling
 * https://github.com/nicholasmabrams/react-seedling
 */

import React from 'react';
import ReactDOM from 'react-dom';

/**
 * @description Importing all react-router components.
 */
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

/**
 * @description Importing all react-bootstrap components.
 */
import { Col, Container, ListGroup, ListGroupItem, Jumbotron, Navbar, Nav, NavItem, PageHeader, Panel, Row } from 'react-bootstrap';

/**
 * @description Global utilities and custom helpers.
 */
import { doAlert } from './js/main';


/**
 * @description Custom app specific styles.
 */
import 'style-loader!./css/global-style.css';

/**
 * @description Modules/components for the application.
 */


/**
 * @class App (react component)
 * @description Handles the global UI. Static app wrapper for the dynamic content.
 */
class App extends React.Component {
	render() {
		return (<div>
					<nav className="navbar navbar-default">
                      <div className="container-fluid">
                        <div className="navbar-header">
                          <button type="button" className="navbar-toggle collapsed">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                          </button>
                          <a className="navbar-brand" href="#">Brand</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                          <ul className="nav navbar-nav">
                            <li className="active">
                                <Link to="/" href="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about" href="/about">About</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
					{ 
						this.props.children 
					}
				</div>)
		}
}

/**
 * @class Home (react component)
 * @description Handles the home view.
 */
class Home extends React.Component {
	render() {
		return (
			<div>
				<PageHeader>Welcome!</PageHeader>
				<Panel>
					<Row>
						<Col sm={12}>
							<p>This is some text.</p>
						</Col>
                        <Col sm={6}>
                            <ListGroup>
                                <ListGroupItem>Item</ListGroupItem>
                                <ListGroupItem>Item</ListGroupItem>
                                <ListGroupItem>Item</ListGroupItem>
                            </ListGroup>
                        </Col>
					</Row>
				</Panel>
			</div>
		)
	}
}

/**
 * @class about (react component)
 * @description Handles the about view.
 */
class About extends React.Component {
	render(){
		return (
			<h1>About!</h1>
		)
	}
}

/**
 * @description Renders the current requested route, or if no routinrg 
 * param is parsed from the request, then the default view (Home) is rendered.
 */
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" component={About}></Route>
		</Route>
	</Router>, 
	document.getElementById('root')
);