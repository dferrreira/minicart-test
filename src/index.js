import React from 'react';
import ReactDOM from 'react-dom';

import Minicart from './containers/MiniCart';

class App extends React.Component {
  render(){
    return (
      <Minicart />
    )
  }
}

window.addEventListener("load", () => ReactDOM.render(<App/>, document.querySelector("#app")));