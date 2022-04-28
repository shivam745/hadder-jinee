import { Route, Routes } from "react-router-dom";
import { Template } from "./components/templates/Templates";
import store from "./store/Store";
import "./index.css";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<Template />} />
      </Routes>
    </Provider>
  );
}

export default App;
