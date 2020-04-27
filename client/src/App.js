import React, {Fragment} from 'react';
import Landing from './componets/layout/Landing'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const  App = () => {
  return  (

      <Router>

        <Fragment>

          <Route exact path='/' component={Landing} />

          

        </Fragment>



      </Router>

  )
    
  
}

export default App;
