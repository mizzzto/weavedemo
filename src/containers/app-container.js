
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
					<MainGrid />
					<MainRightGrid />
				</div>
				<div className="container">
					<BottomGrid />
					<BottomRightGrid />
				</div>
			</div>
		);
	}
}

export default AppContainer;