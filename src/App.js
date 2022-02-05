import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import { Provider } from "react-redux";
import { store } from "./redux/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Feed />
      </div>
    </Provider>
  );
}

export default App;
