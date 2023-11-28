import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddKasirComponent() {
  let navigate = useNavigate();

  const [kasir, setKasir] = useState({
    kodekasir: "",
    nama: "",
    hp: ""
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setKasir({
      ...kasir,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post(`http://localhost:8082/insert/kasir`, kasir);
    navigate("/");
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow mx-auto">
          <h2 className="text-center m-4">Tambah Data Kasir</h2>
  
          <form onSubmit={onSubmit} className="mt-4">
            <div className="mb-3 row">
              <label htmlFor="nama" className="col-md-4 col-form-label">
                Nama
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="nama"
                  value={kasir.nama}
                  autoComplete="off"
                  onChange={onInputChange}
              
                />
              </div>
            </div>
  
            <div className="mb-3 row">
              <label htmlFor="satuan" className="col-md-4 col-form-label">
                Hp
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="hp"
                  value={kasir.hp}
                  onChange={onInputChange}
                />
              </div>
            </div>
            
            <div className="d-flex justify-content-end"> 
              <button type="submit" className="btn btn-success">Tambah</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
