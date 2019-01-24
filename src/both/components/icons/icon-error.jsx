
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

class IconError extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg version="1.0" viewBox="0 0 512 512" style={this.props.style} className={this.props.className}>
				<path d="M363 333l-77-77 77-77-30-30-77 77-77-77-30 30 77 77-77 77 30 30 77-77 77 77 30-30zM105.5 105.5Q168 43 256 43t150.5 62.5Q469 168 469 256t-62.5 150.5Q344 469 256 469t-150.5-62.5Q43 344 43 256t62.5-150.5z"></path>
			</svg>
		);
	}
}

/****************************************************************************************/

export default IconError;

/****************************************************************************************/
