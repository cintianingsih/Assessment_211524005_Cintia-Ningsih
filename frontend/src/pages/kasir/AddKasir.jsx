import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import AddKasirComponent from "../../components/kasir/AddKasirComponent";

function AddKasir() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />

            <div className="container-fluid">
              <AddKasirComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddKasir;
