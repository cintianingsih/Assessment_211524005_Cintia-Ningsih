import axios from 'axios';
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function EditBarangComponent({id}) {
  const [barang, setBarang] = useState({});
  const [loading, setLoading] = useState(true);
    
    const [formData, setFormData] = useState({
        kodebarang:``,
        namabarang:``,
        satuan:``,
        hargasatuan:``,
        stok:``
    });

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://localhost:8082/barang/${id}`);
            setBarang(response.data);
            setFormData(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        }
    
        fetchData();
    }, [id]);
    
    
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,[name]: value,
        });
    };

    

    const onSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:8082/update/barang`, formData);
            console.log(response.data);
            Navigate("/");
            
          } catch (error) {
            console.error('Error updating data:', error);
          }
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2 border rounded p-4 mt-2 shadow mx-auto">
          <h2 className="text-center m-4">Edit Barang</h2>
          
          <form onSubmit={onSubmit} className="mt-4">
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Nama Brang</label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name='namabarang' 
                  value={formData.namabarang}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Nama Brang</label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name='satuan' 
                  value={formData.satuan}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Nama Brang</label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name='hargasatuan' 
                  value={formData.hargasatuan}
                  onChange={onInputChange}
                />
              </div>
            </div>
      
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Nama Brang</label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name='stok' 
                  value={formData.stok}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="d-flex justify-content-end"> 
              <button type='submit' className='btn btn-primary'>Simpan Perubahan</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


export default EditBarangComponent;
