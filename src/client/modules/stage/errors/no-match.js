
/****************************************************************************************

	Copyright (c) 2018, QELQ.
	Author: Juan Carlos Labrandero.
	For conditions of distribution and use, see copyright notice in LICENSE

****************************************************************************************/

import React from 'react';

import noMatchView from '../../../views/stage/errors/no-match.view.jsx';

/****************************************************************************************/

class NoMatch extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return noMatchView.call(this);
	}
}

/****************************************************************************************/

export default NoMatch;

/****************************************************************************************/
