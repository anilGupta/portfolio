import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { AppContainer } from 'react-hot-loader';
import { Provider } from "mobx-react";
import store from "./stores/stores";


const render = (Component) => {
  ReactDOM.render(<AppContainer>
          <Provider {...store}>
            <Component />
          </Provider>
      </AppContainer>,document.getElementById('root')
  );
};

render(Routes);

module.hot.accept('./routes', () => {
  render(Routes)
});
