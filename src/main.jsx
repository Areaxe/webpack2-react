/*import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history'
import { Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Index/index';
import List from './pages/List/list.jsx';
import Template from './pages/Template.jsx';
let history = createBrowserHistory()

ReactDOM.render((
  <Router history={history}>
    <Route component={(props)=>(
      <Template {...props}>
        <Switch>
          <Route path='/' component={Home}/>
          <Route path='/list' component={List} />
        </Switch>
      </Template>
    )}/>
  </Router>
), document.getElementById('root'));*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory,hashHistory } from 'react-router'
import Home from './pages/Index/index';
import List from './pages/List/list.jsx';
import Template from './pages/Template.jsx';
import './styles/base.scss';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={Template} >
       <IndexRoute component={Home}/>
       <Route path="/" component={Home}/>
       <Route path="/list" component={List} />
    </Route>
  </Router>
), document.getElementById('root'));