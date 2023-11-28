import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Barang from "./pages/barang/Barang";
import EditBarang from "./pages/barang/EditBarang";
import AddBarang from "./pages/barang/AddBarang";




function App() {
  return (

    <Router>
      <Routes>
        
        <Route path="/" element={<Barang />} />
        <Route path="/update/barang/:id" element={<EditBarang />} />
        <Route path="/insert/barang" element={<AddBarang />} />
           
      </Routes>
    </Router>
  );
}

export default App;