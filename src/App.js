import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import TodoContainer from "./TodoContainer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <TodoContainer />
    </Provider>
  );
}

export default App;
