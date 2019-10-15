import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {store, persistor} from "./core/store/CreateStore";
import {PersistGate} from 'redux-persist/integration/react'
import AppContainer from "./containers/AppContainer";
import {initEditorialContext} from "./core/actions/EditorialContextActions";


const RenderLogin = (store = {}, persistor) => {

  const commonWrapper = document.getElementById('common_wrapper');
  if (commonWrapper) {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer/>
        </PersistGate>
      </Provider>,
      commonWrapper
    );
  } else {
    console.warn("No common_wrapper found!");
  }
}

RenderLogin(store, persistor);
store.dispatch(initEditorialContext());

