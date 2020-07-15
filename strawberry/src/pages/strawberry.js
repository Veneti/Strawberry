import React, { Component } from 'react';
import Strawberry from '../images/strawberry.png'

class strawberry extends Component {
    render() {
		return (
			<div>
				<header className="App-header">
          <img src={Strawberry} className="App-logo" alt="logo" />
          <p>
            Strawberry Squad!
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Learn React */}
          </a>
        </header>
      </div>
		);
	}
}
export default (strawberry);

