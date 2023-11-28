import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddBarang from "./pages/barang/AddBarang";




function App() {
  return (

    <Router>
      <Routes>
        
        <Route path="/insert/barang" element={<AddBarang />} />
           
      </Routes>
    </Router>
  );
}

export default App;