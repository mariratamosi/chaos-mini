import { useDispatch, useSelector } from "react-redux";
import Login from "./Modules/login/component/login";

import "./Styles/App.scss";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
