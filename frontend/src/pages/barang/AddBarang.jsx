import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddBarangComponent from "../../components/barang/AddBarangComponent";

function AddBarang() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
              <AddBarangComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddBarang;
