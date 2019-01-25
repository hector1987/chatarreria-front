import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login/Login';
import Desktop from './components/desktop/Desktop';
import Reciclators from './components/reciclators/Reciclators';
import Costumers from './components/costumers/Costumers';
import Purchases from './components/purchases/Purchases';
import ControlPanel from './components/control_panel/ControlPanel';

//<Redirect from="/" component={LoginForm} />

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>       
          <Switch>
            <Route exact path="/" component={Login} />    
            <Route exact path="/desktop" component={Desktop} /> 
            <Route exact path="/costumers" component={Costumers} /> 
            <Route exact path="/reciclators" component={Reciclators} /> 
            <Route exact path="/purchases" component={Purchases} /> 
            <Route exact path="/control_panel" component={ControlPanel} />             
            <Route path="*" component={Login}/>                 
            <Route component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
