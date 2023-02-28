import { Provider } from "react-redux";
import { store } from "../store/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/main.css";
import "../styles/demo.css";
import "../styles/custom.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
