import "./App.css";
import {Header} from "./components/Header"
import { Body } from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store"
function App() {
  return (
    <Provider store={store} >

   <div className="flex flex-col">
   <Header></Header>
   <Body></Body>
   </div>

   </Provider>
  );
}

export default App;
