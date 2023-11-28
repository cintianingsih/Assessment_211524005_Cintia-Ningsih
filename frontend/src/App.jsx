import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Barang from "./pages/barang/Barang";
import EditBarang from "./pages/barang/EditBarang";
import AddBarang from "./pages/barang/AddBarang";
import Kasir from "./pages/kasir/Kasir";
import EditKasir from "./pages/kasir/EditKasir";
import AddKasir from "./pages/kasir/AddKasir";
import Tenan from "./pages/kasir/Kasir";
import EditTenan from "./pages/kasir/EditKasir";
import AddTenan from "./pages/kasir/AddKasir";





function App() {
  return (

    <Router>
      <Routes>
        
        <Route path="/" element={<Barang />} />
        <Route path="/update/barang/:id" element={<EditBarang />} />
        <Route path="/insert/barang" element={<AddBarang />} />

        <Route path="/kasir" element={<Kasir />} />
        <Route path="/update/kasir/:id" element={<EditKasir />} />
        <Route path="/insert/kasir" element={<AddKasir />} />

        <Route path="/tenan" element={<Tenan />} />
        <Route path="/update/tenan/:id" element={<EditTenan />} />
        <Route path="/insert/tenan" element={<AddTenan />} />
           
      </Routes>
    </Router>
  );
}

export default App;