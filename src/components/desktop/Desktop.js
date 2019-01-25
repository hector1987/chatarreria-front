import React, { Component } from 'react';
import NameUser from './NameUser';
import OptionMenu from './OptionMenu';
import Container from './Container';
import ReactDOM from 'react-dom';
import logo_login from '../../images/logo_login.png?v1.0';
import LogoLogin from '../login/LogoLogin';
import './desktop.css';

class Desktop extends Component {
	constructor(props, context) { 
    	super(props, context); 
    	this.state = { 
    	 	componente: "WelcomePage" 
	    }; 
	    this.actualizarContainer = this.actualizarContainer.bind(this);
	} 	
	actualizarContainer(val){
		//if(val == )
		this.setState({ componente: val });		
	}	
  	render() {		 		
  	  	return (  	  		  
  	  		<div className="App">                 
	 		    <div id="pestanas" className="navigationDesk">
	 		    	<div className="LogoCabecera">
	 		    		<img src={ logo_login } alt="Acecolombia" />
	 		    	</div>
	 		    	<OptionMenu funcionClick = {this.actualizarContainer}/>
	 		    </div>
	 		    <div id="cabeceraDesk" className="cabeceraDesk">
	 		    	<NameUser className="ContentUser" />  	    		
	 		    </div>
	    		<div id="contenidopestanas" className="contentDesk">
	    			<Container componente={this.state.componente}/>
	    		</div>	 		     
	        </div>   	
		);
  	}
}

export default Desktop
