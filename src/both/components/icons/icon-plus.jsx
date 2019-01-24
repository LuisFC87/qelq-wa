
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

/****************************************************************************************/

class IconPlus extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<svg version="1.0" viewBox="0 0 32 32" style={this.props.style} className={this.props.className}>
				<path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16 9.913 5 16 5zm-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5h-2z"></path>
			</svg>
		);
	}
}

/****************************************************************************************/

export default IconPlus;

/****************************************************************************************/
