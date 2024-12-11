import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Offcanvas,
  Button,
  ButtonGroup,
  Image,
  NavDropdown,
} from "react-bootstrap";
import myProfil from "../assets/images/photo1.jpeg";
import { logout } from "../api/Api";
import { ToastContainer, toast, Slide } from "react-toastify";
import { useGlobal } from "../context/GlobalContext";

function OffcanvasDashboard() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const { globalData } = useGlobal(); // Mengambil role dari context global
  const { role } = globalData;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async () => {
    try {
      const response = await logout();
      console.log(response.data.message);
      toast.success("Berhasil Keluar!", {
        position: "top-right",
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error.response) {
        console.error("Logout gagal:", error.response.data);
      } else {
        console.error("Logout gagal: Network Error", error);
      }
    }
  };

  // const navigateWithRole = (path) => {
  //   // Menambahkan query parameter role ke URL saat menavigasi
  //   navigate(`${path}?role=${role}`);
  // };

  return (
    <>
      <Button variant="link" onClick={handleShow} className="ms-2 mt-2">
        <i className="fa-solid fa-bars"></i>
      </Button>
      <Offcanvas
        className="custom-offcanvas"
        show={show}
        onHide={handleClose}
        placement="start" // Penambahan opsi placement jika diperlukan
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title as="p">
            <Image
              className="custom-image-offcanvas"
              src={myProfil}
              roundedCircle
            />
            {role === "admin_universitas" && "Admin Universitas"}
            {role === "admin_prodi" && "Admin Program Studi"}
            {role === "alumni" && "Alumni"}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr></hr>
        <Offcanvas.Body>
          <Offcanvas.Title as="p">MENU</Offcanvas.Title>
          <ButtonGroup vertical className="custom-button-group">
            <Button onClick={() => navigate("/profil")}>
              <i className="fa-solid fa-user custom-icon"></i>
              Profil
            </Button>
            <Button onClick={() => navigate("/dashboard-admin-universitas")}>
              <i className="fa-solid fa-gauge custom-icon"></i>
              Dasbor
            </Button>

            {/* Tampilan umum */}
            <Button onClick={() => navigate("/data-alumni")}>
              <i className="fa-solid fa-chart-line custom-icon"></i>
              Data Alumni
            </Button>

            {/* Tampilan khusus untuk alumni */}
            {role === "alumni" && (
              <>
                <Button onClick={() => navigate(`/tracer-study-alumni`)}>
                  <i className="fa-solid fa-table-list custom-icon"></i>
                  Tracer Study
                </Button>

                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-solid fa-user-graduate custom-icon"></i>
                      Program Alumni
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    onClick={() => navigate(`/tambah-program-alumni`)}
                  >
                    <i className="fa-solid fa-plus custom-icon"></i>
                    Tambah Program Alumni
                  </NavDropdown.Item>

                  <NavDropdown.Item
                    onClick={() => navigate("/manajemen-program-alumni")}
                  >
                    <i className="fa-solid fa-user-graduate custom-icon"></i>
                    Daftar Program Alumni
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {/* Tampilan khusus untuk admin_universitas */}
            {role === "admin_universitas" && (
              <>
                <Button>
                  <i className="fa-solid fa-table-list custom-icon"></i>
                  Tracer Study
                </Button>

                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-regular fa-newspaper custom-icon"></i>
                      Berita
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => navigate(`/tambah-berita`)}>
                    <i className="fa-solid fa-plus custom-icon"></i>
                    Tambah Berita
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/manajemen-berita")}
                  >
                    <i className="fa-regular fa-pen-to-square custom-icon"></i>
                    Manajemen Berita
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-solid fa-calendar-days custom-icon"></i>
                      Acara
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => navigate(`/tambah-acara`)}>
                    <i className="fa-solid fa-plus custom-icon"></i>
                    Tambah Acara
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/manajemen-acara")}
                  >
                    <i className="fa-regular fa-pen-to-square custom-icon"></i>
                    Manajemen Acara
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-solid fa-list-check"></i>Verifikasi
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    onClick={() => navigate("/verifikasi-berita-prodi")}
                  >
                    <i className="fa-regular fa-newspaper custom-icon"></i>
                    Berita
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/verifikasi-acara-prodi")}
                  >
                    <i className="fa-solid fa-calendar-days custom-icon"></i>
                    Acara
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/verifikasi-program-alumni")}
                  >
                    <i className="fa-solid fa-user-graduate custom-icon"></i>
                    Program Alumni
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-solid fa-list-check"></i>Bagikan
                      Informasi
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => navigate("/bagikan-berita")}>
                    <i className="fa-regular fa-newspaper custom-icon"></i>
                    Berita
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => navigate("/bagikan-acara")}>
                    <i className="fa-solid fa-calendar-days custom-icon"></i>
                    Acara
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/bagikan-program-alumni")}
                  >
                    <i className="fa-solid fa-user-graduate custom-icon"></i>
                    Program Alumni
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {/* Tampilan khusus untuk admin_prodi */}
            {role === "admin_prodi" && (
              <>
                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-regular fa-newspaper custom-icon"></i>
                      Berita
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => navigate(`/tambah-berita`)}>
                    <i className="fa-solid fa-plus custom-icon"></i>
                    Tambah Berita
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/manajemen-berita")}
                  >
                    <i className="fa-regular fa-pen-to-square custom-icon"></i>
                    Manajemen Berita
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-solid fa-calendar-days custom-icon"></i>
                      Acara
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item onClick={() => navigate(`/tambah-acara`)}>
                    <i className="fa-solid fa-plus custom-icon"></i>
                    Tambah Acara
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => navigate("/manajemen-acara")}
                  >
                    <i className="fa-regular fa-pen-to-square custom-icon"></i>
                    Manajemen Acara
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-verifikasi"
                  className="nav-dropdown"
                  title={
                    <span>
                      <i className="fa-solid fa-list-check"></i>Verifikasi
                    </span>
                  }
                  menuVariant="dark"
                >
                  <NavDropdown.Item
                    onClick={() => navigate("/verifikasi-program-alumni")}
                  >
                    <i className="fa-solid fa-user-graduate custom-icon"></i>
                    Program Alumni
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}

            {/* Hanya tampilkan tombol Keluar */}
            <Button variant="outline-danger" onClick={handleLogout}>
              <i className="fa-regular fa-circle-xmark custom-icon"></i>
              Keluar
            </Button>
          </ButtonGroup>
        </Offcanvas.Body>
      </Offcanvas>
      <ToastContainer />
    </>
  );
}

export default OffcanvasDashboard;
