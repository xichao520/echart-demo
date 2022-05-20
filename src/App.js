import Header from "./common/header";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./page/home";
import Detail from "./page/detail";
import EchartDemo from "./page/echart";

function App() {
  return (
    <Provider store={store}>
      {true ? (
        <BrowserRouter>
          <Routes>
            <Route path={"/"} exact element={<EchartDemo />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={"/"} exact element={<Home />}></Route>
            <Route path={"/detail"} exact element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export default App;
