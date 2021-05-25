import React from "react";
import logo from "./logo.svg";
import { Counter, CounterWithProvider } from "my-redux-component";
import { store } from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      {/* <CounterWithProvider /> */}
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
