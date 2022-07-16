import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


//components
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Supported from '../Supported/Supported';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Thanks from '../Thanks/Thanks'

function App() {

  return (
    <Router>
      <div className='App'>
          <header className='App-header'>
            <h1 className='App-title'>Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>

        <Route path={'/'} exact>
          <Feeling />
        </Route>

        <Route path={'/understanding'}>
          <Understanding />
        </Route>

        <Route path={"/supported"}>
          <Supported />
        </Route>

        <Route path={"/comments"}>
          <Comments />
        </Route>

        <Route path={"/review"}>
          <Review />
        </Route>

        <Route path={"/thanks"}>
          <Thanks />
        </Route>



      </div>
    </Router>
  );
}

export default App;
