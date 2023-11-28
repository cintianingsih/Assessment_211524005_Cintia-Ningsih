import axios from 'axios';
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function EditKasirComponent({id}) {
  const [kasir, setKasir] = useState({});
  const [loading, setLoading] = useState(true);
    
    const [formData, setFormData] = useState({
        kodekasir:``,
        nama:``,
        hp:``
    });

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await axios.get(`http://localhost:8082/kasir/${id}`);
            setKasir(response.data);
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
            const response = await axios.post(`http://localhost:8082/update/kasir`, formData);
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
          <h2 className="text-center m-4">Edit Kasir</h2>
          
          <form onSubmit={onSubmit} className="mt-4">
            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Nama</label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name='nama' 
                  value={formData.nama}
                  onChange={onInputChange}
                />
              </div>
            </div>

            <div className="mb-3 row">
              <label className="col-md-4 col-form-label">Hp</label>
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control"
                  name='hp' 
                  value={formData.hp}
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


export default EditKasirComponent;
