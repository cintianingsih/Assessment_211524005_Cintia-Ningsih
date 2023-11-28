import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

export default function ListBarang() {
    
    const [data, setData] = useState([]);

    useEffect(()=>{
        loadBarang();
    },[]);

    const loadBarang=async()=>{
        const result = await axios.get("http://localhost:8082/barang");
        setData(result.data);
    };

    

      return (
        <div className="container">
            <h1 className="text-center p-3 m-3">Daftar Barang</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex justify-content-end">
                    <Link to="/insert/barang" className="btn btn-outline-success">Tambah Barang</Link>
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
                                    <th scope="col">Kode Barang</th>
                                    <th scope="col">Nama Barang</th>
                                    <th scope="col">Satuan</th>
                                    <th scope="col">Harga Satuan</th>
                                    <th scope="col">Stok</th>
        
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {data.map((barang)=>(
                                    <tr key={barang.kodebarang}>
                                        <td>{barang.kodebarang}</td>
                                        <td>{barang.namabarang}</td>
                                        <td>{barang.satuan}</td>
                                        <td>{barang.hargasatuan}</td>
                                        <td>{barang.stok}</td>
                            
                                
                                        <td>
                                            <div className="d-flex justify-content-center">
                                                <Link to={{ pathname: `/update/barang/${barang.kodebarang}` }}>
                                                    <button type="button" className="btn btn-success">
                                                    <FaEdit />
                                                    </button>
                                                </Link>
                                                
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
