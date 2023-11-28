import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function ListKasir() {
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        loadKasir();
    },[]);

    const loadKasir=async()=>{
        const result = await axios.get("http://localhost:8082/kasir");
        setData(result.data);
    };

    async function handleDelete(kodekasir) {
        const confirmDelete = window.confirm('Apakah Anda yakin ingin menghapus data ini?');
        if (!confirmDelete) {
          return;
        }
        try {
          await axios.delete(`http://localhost:8082/kasir/delete?kodekasir=${kodekasir}`);
          setData((prevData) => prevData.filter((kasir) => kasir.kodekasir !== kodekasir));
          alert('Data kasir berhasil dihapus');
        } catch (error) {
          console.error('Error deleting data:', error);
        }
      }

      return (
        <div className="container">
            <h1 className="text-center p-3 m-3">Daftar Kasir</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-end">
                    <Link to="/insert/kasir" className="btn btn-outline-success">Tambah Kasir</Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0">
                            <thead>
                                <tr>
                                    <th scope="col">Kode Kasir</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">HP</th>
                
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {data.map((kasir)=>(
                                    <tr key={kasir.kodekasir}>
                                        <td>{kasir.kodekasir}</td>
                                        <td>{kasir.nama}</td>
                                        <td>{kasir.hp}</td>

                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <Link to={{ pathname: `/update/kasir/${kasir.kodekasir}` }}>
                                                    <button type="button" className="btn btn-success">
                                                    <FaEdit />
                                                    </button>
                                                </Link>
                                                <button
                                                    className="btn btn-danger ml-2"
                                                    onClick={() => handleDelete(kasir.kodekasir)}>
                                                    <FaTrash />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
