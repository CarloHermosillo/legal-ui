import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LawsuitsPage from "./pages/lawsuits/lawsuitsPage";
import Layout from "./pages/layout";
import RemoteResourceFactory from "./utils/http/RemoteResourceFactory";
import ClientServiceImpl from "./services/impl/client-service-impl";
import ClientPage from "./pages/client/client-page";

const factory = new RemoteResourceFactory();

const clientService = new ClientServiceImpl(factory);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="lawsuits"
            element={<LawsuitsPage clientService={clientService} />}
          />
          <Route path="client" element={<ClientPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
