
import React, {Component} from 'react';

//Axios for Ajax
//import Axios from 'axios';

import MainGrid from '../components/main-grid';
import MainRightGrid from '../components/main-right-grid';
import BottomGrid from '../components/bottom-grid';
import BottomRightGrid from '../components/bottom-right-grid';

class AppContainer extends Component {
	constructor(props){
		super(props);

		//this.state = { };
	}

	render(){
		return(
			<div>
				<div className="container">
					<MainGrid width="15" height="15" cellWidth="19" cellHeight="19" />
					<MainRightGrid width="4" height="15" cellWidth="19" cellHeight="19" />
				</div>
				<div className="container">
					<BottomGrid width="15" height="4" cellWidth="19" cellHeight="19" />
					<BottomRightGrid width="4" height="4" cellWidth="19" cellHeight="19" />
				</div>
			</div>
		);
	}
}

export default AppContainer;
