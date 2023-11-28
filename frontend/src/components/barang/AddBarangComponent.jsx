import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddBarangComponent() {
  let navigate = useNavigate();

  const [barang, setBarang] = useState({
    kodebarang: "",
    namabarang: "",
    satuan: "",
    hargasatuan: "",
    stok:""
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBarang({
      ...barang,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post(`http://localhost:8082/insert/barang`, barang);
    navigate("/");
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow mx-auto">
          <h2 className="text-center m-4">Tambah Data Barang</h2>
  
          <form onSubmit={onSubmit} className="mt-4">
            <div className="mb-3 row">
              <label htmlFor="namabarang" className="col-md-4 col-form-label">
                Nama Barang
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="namabarang"
                  value={barang.namabarang}
                  autoComplete="off"
                  onChange={onInputChange}
              
                />
              </div>
            </div>
  
            <div className="mb-3 row">
              <label htmlFor="satuan" className="col-md-4 col-form-label">
                Satuan
              </label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name="satuan"
                  value={barang.satuan}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='hargasatuan' className='col-md-4 col-form-label'>
                Harga Satuan
              </label>
              <div className='col-md-8'>
                <input
                  type='text'
                  className='form-control'
                  name='hargasatuan'
                  value={barang.hargasatuan}
                  onChange={onInputChange}
                />
              </div>
            </div>
            <div className='mb-3 row'>
              <label htmlFor='hargasatuan' className='col-md-4 col-form-label'>
                Stok
              </label>
              <div className='col-md-8'>
                <input
                  type='text'
                  className='form-control'
                  name='stok'
                  value={barang.stok}
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
