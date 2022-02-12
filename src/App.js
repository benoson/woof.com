import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./pages/Feed";
import { Provider } from "react-redux";
import { store } from "./redux/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
