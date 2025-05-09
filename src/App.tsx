import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LawsuitsPage from "./pages/lawsuits/lawsuitsPage";
import Layout from "./pages/layout";
import RemoteResourceFactory from "./utils/http/RemoteResourceFactory";
import LawsuitsServiceImpl from "./services/impl/lawsuitsServiceImpl";

const restRemoteResource = RemoteResourceFactory.create();
const lawsuitsService = new LawsuitsServiceImpl(restRemoteResource);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="lawsuits"
            element={<LawsuitsPage service={lawsuitsService} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
