import React, { Component, Fragment } from 'react';
import RputerMap from './router';

import './assets/styles/style.less';

class App extends Component {
  render() {
    return (
      <section className="main-container">
        <RputerMap/>
      </section>
    );
  }
}

export default App;
