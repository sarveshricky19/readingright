import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import { img } from "./Redux/imgReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const middleware = applyMiddleware(thunk);
export const store = createStore(img, middleware);
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);