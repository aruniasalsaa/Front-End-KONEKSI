import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Login from "./pages/Login";
import UbahPassword from "./pages/UbahPassword";
import Berita from "./pages/Berita";
import Acara from "./pages/Acara";
import ProgramAlumni from "./pages/ProgramAlumni";
import VisiMisi from "./pages/VisiMisi";
import DetailBerita from "./pages/DetailBerita";
import DetailAcara from "./pages/DetailAcara";
import DetailProgramAlumni from "./pages/DetailProgramAlumni";
import DashboardAlumni from "./pages/DashboardAlumni";
import DashboardAdminProdi from "./pages/DashboardAdminProdi";
import DashboardAdminUniv from "./pages/DashboardAdminUniv";
import TambahProgramAlumni from "./pages/TambahProgramAlumni";
import VerifikasiProgramAlumni from "./pages/VerifikasiProgramAlumni";
import VerifikasiBeritaProdi from "./pages/VerifikasiBeritaProdi";
import VerifikasiAcaraProdi from "./pages/VerifikasiAcaraProdi";
import TambahBerita from "./pages/TambahBerita";
import TambahAcara from "./pages/TambahAcara";
import ProfilPage from "./pages/ProfilPage";
import DetailProgramAlumniDashboard from "./pages/DetailProgramAlumniDashboard";
import ManajemenAcara from "./pages/ManajemenAcara";
import ManajemenBerita from "./pages/ManajemenBerita";
import ManajemenProgramAlumni from "./pages/ManajemenProgramAlumni";
import BagikanBerita from "./pages/BagikanBerita";
import BagikanAcara from "./pages/BagikanAcara";
import BagikanProgramAlumni from "./pages/BagikanProgramAlumni";
import UpdateBerita from "./pages/UpdateBerita";
import UpdateAcara from "./pages/UpdateAcara";
import DetailManajemenBerita from "./pages/DetailManajemenBerita";
import DetailManajemenAcara from "./pages/DetailManajemenAcara";
import DataAlumni from "./pages/DataAlumni";
import TracerStudyAlumni from "./pages/TracerStudyAlumni";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <Beranda />,
    },
    {
      path: "/visi-misi",
      element: <VisiMisi />,
    },
    {
      path: "/berita",
      element: <Berita />,
    },
    {
      path: "/acara",
      element: <Acara />,
    },
    {
      path: "/program-alumni",
      element: <ProgramAlumni />,
    },
    {
      path: "/masuk",
      element: <Login />,
    },
    {
      path: "/ubah-kata-sandi",
      element: <UbahPassword />,
    },
    {
      path: "/detail-berita/:id",
      element: <DetailBerita />,
    },
    {
      path: "/detail-acara/:id",
      element: <DetailAcara />,
    },
    {
      path: "/detail-program-alumni/:id",
      element: <DetailProgramAlumni />,
    },
    {
      path: "/dashboard-alumni",
      element: <DashboardAlumni />,
    },
    {
      path: "/dashboard-admin-universitas",
      element: <DashboardAdminUniv />,
    },
    {
      path: "/dashboard-admin-prodi",
      element: <DashboardAdminProdi />,
    },

    {
      path: "/tambah-berita",
      element: <TambahBerita />,
    },
    {
      path: "/tambah-acara",
      element: <TambahAcara />,
    },
    {
      path: "/tambah-program-alumni",
      element: <TambahProgramAlumni />,
    },
    {
      path: "/verifikasi-program-alumni",
      element: <VerifikasiProgramAlumni />,
    },
    {
      path: "/verifikasi-berita-prodi",
      element: <VerifikasiBeritaProdi />,
    },
    {
      path: "/verifikasi-acara-prodi",
      element: <VerifikasiAcaraProdi />,
    },
    {
      path: "/manajemen-berita",
      element: <ManajemenBerita />,
    },
    {
      path: "/manajemen-acara",
      element: <ManajemenAcara />,
    },
    {
      path: "/manajemen-program-alumni",
      element: <ManajemenProgramAlumni />,
    },
    {
      path: "/profil",
      element: <ProfilPage />,
    },
    {
      path: "/detail-manajemen-berita/:id",
      element: <DetailManajemenBerita />,
    },
    {
      path: "/detail-manajemen-acara/:id",
      element: <DetailManajemenAcara />,
    },
    {
      path: "/dasbor-detail-program-alumni/:id",
      element: <DetailProgramAlumniDashboard />,
    },
    {
      path: "/bagikan-berita",
      element: <BagikanBerita />
    },
    {
      path: "/bagikan-acara",
      element: <BagikanAcara />
    },
    {
      path: "/bagikan-program-alumni",
      element: <BagikanProgramAlumni />
    },
    {
      path: "/perbarui-berita/:id",
      element: <UpdateBerita />
    },
    {
      path: "/perbarui-acara/:id",
      element: <UpdateAcara />
    },
    {
      path: "/data-alumni",
      element: <DataAlumni />
    },
    {
      path: "/tracer-study-alumni",
      element: <TracerStudyAlumni />
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
