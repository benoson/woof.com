import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import MainContainer from "./MainContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
