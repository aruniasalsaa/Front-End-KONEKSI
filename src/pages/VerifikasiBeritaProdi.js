import { useGlobal } from "../context/GlobalContext";
import { useState, useEffect } from "react";
import { getNewsToBeVerified } from "../api/Api";
import TabelVerifikasiBerita from "../components/TabelVerifikasiBerita";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { ToastContainer } from "react-toastify";

function VerifikasiBeritaProdi() {
  const { globalData } = useGlobal();
  const username = globalData.username;

  const [berita, setBerita] = useState([]);
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await getNewsToBeVerified();
        const beritaArray = response.data.data;

        if (Array.isArray(beritaArray)) {
          const beritaData = beritaArray
            .map((item) => ({
              id: item.id,
              image: item.image,
              title: item.title,
              content: item.content,
              createdAt: item.createdAt,
              authorName: item.author.username,
            }));
          setBerita(beritaData);
        } else {
          console.error("Data yang diterima bukan array:", beritaArray);
        }
      } catch (error) {
        console.error("Error fetching berita: ", error);
      }
    };

    fetchBerita();
  }, [username]);

  return (
    <>
      <OffcanvasDashboard />
      <TabelVerifikasiBerita beritaProdi={berita} />
      <ToastContainer />
    </>
  );
}

export default VerifikasiBeritaProdi;