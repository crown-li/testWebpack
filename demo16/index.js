import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

require('./app.css');

//var App = React.createClass({
//render: function () {
//  return (
//    <div>
//      <header>
//        <ul>
//          <li><Link to="/app">Dashboard</Link></li>
//          <li><Link to="/inbox">Inbox</Link></li>
//          <li><Link to="/calendar">Calendar</Link></li>
//        </ul>
//        Logged in as Jane
//      </header>
//      {this.props.children}
//    </div>
//  );
//}
//});

class App extends React.Component {  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/app">Dashboard</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
            <li><Link to="/calendar">Calendar</Link></li>
          </ul>
          Logged in as Jane
        </header>
        {this.props.children}
      </div>
    );
  }
}
App.propTypes = { 
	initialValue: 
};
App.defaultProps = { 
	initialValue: '' 
};

//var Dashboard = React.createClass({
//render: function () {
//  return (
//    <div>
//      <p>Dashboard</p>
//    </div>
//  );
//}
//});

class Dashboard extends React.Component {  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    );
  }
}
Dashboard.propTypes = { 
	initialValue: 
};
Dashboard.defaultProps = { 
	initialValue: '' 
};

//var Inbox = React.createClass({
//render: function () {
//  return (
//    <div>
//      <p>Inbox</p>
//    </div>
//  );
//}
//});

class Inbox extends React.Component {  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Inbox</p>
      </div>
    );
  }
}
Inbox.propTypes = { 
	initialValue: 
};
Inbox.defaultProps = { 
	initialValue: '' 
};

//var Calendar = React.createClass({
//render: function () {
//  return (
//    <div>
//      <p>Calendar</p>
//    </div>
//  );
//}
//});

class Calendar extends React.Component {  
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Calendar</p>
      </div>
    );
  }
}
Calendar.propTypes = { 
	initialValue: 
};
Calendar.defaultProps = { 
	initialValue: '' 
};


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="app" component={Dashboard}/>
      <Route path="inbox" component={Inbox}/>
      <Route path="calendar" component={Calendar}/>
      <Route path="*" component={Dashboard}/>
    </Route>
  </Router>
), document.querySelector('#app'));
