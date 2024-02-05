import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from "./pages/inicio";
import SobreMim from "./pages/SobreMim";
import Rodape from "components/Rodape";
import PaginaPadrao from "components/PaginaPadrao";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
        </Route>

        {/* Na rota "/", a estrutura a ser renderiza é:

        <PaginaPadrao>
          <Inicio />
        </PaginaPadrao>

        Na rota "/sobremim", a estrutura a ser renderiza é:

        <PaginaPadrao>
          <SobreMim />
        </PaginaPadrao> */}

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
