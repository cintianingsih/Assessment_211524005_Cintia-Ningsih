import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import { useParams } from 'react-router-dom';
import EditBarangComponent from '../../components/barang/EditBarangComponent';

function EditBarang(){
    const { id } = useParams();
    return (
    <>
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Navbar />

          <div className="container-fluid">
          <EditBarangComponent id={id}/>
            
          </div>
        </div>
      </div>
    </div>
  </> 
  )
    
    
}

export default EditBarang;