import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import configureStore from "./stores/stores";
import { AppContainer } from 'react-hot-loader';
import { Provider } from "react-redux";

const store = configureStore();
const render = (Component) => {
  ReactDOM.render(<AppContainer>
          <Provider store={store}>
            <Component />
          </Provider>
      </AppContainer>,document.getElementById('root')
  );
};

render(Routes);

module.hot.accept('./routes', () => {
  render(Routes)
});
