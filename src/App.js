import React from "react";
import "./App.css";
import { holocronModule, composeModules } from "holocron";
import { reducer } from "./reducer";

const load = ({ count }) => dispatch =>
  dispatch(composeModules([{ name: "app", props: { count } }]));

function App({ moduleState: { count } }) {
  return (
    <div className="App">
      <button>{count}</button>
    </div>
  );
}

export default holocronModule({
  name: "app",
  reducer,
  load
})(App);
