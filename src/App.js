import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';
import './App.module.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
// Import components
import Inventory from './components/Inventory/Inventory';

class App extends Component {
  render() {
    return (
      <div>
          <AppBar position="static">
            <Toolbar>
              <Icon>menu</Icon>
              <Typography variant="h6" color="inherit" >
                COUNTERAPP
              </Typography>
            </Toolbar>
          </AppBar>
        <body>
            <Inventory />
        </body>
      </div>
    );
  }
}

export default App;
