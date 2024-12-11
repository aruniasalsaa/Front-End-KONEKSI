import { useState, useEffect } from "react";
import { getVerifiedNews } from "../api/Api";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { useGlobal } from "../context/GlobalContext";
import { Container } from "react-bootstrap";
import TabelBagikanBerita from "../components/TabelBagikanBerita";

function BagikanBerita() {
  const { globalData } = useGlobal(); // Ambil data global
  const username = globalData.username; // Ambil username dari context

  const [berita, setBerita] = useState([]);
  const [enabledStatus, setEnabledStatus] = useState({});

  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await getVerifiedNews(); // Ambil data berita dari API
        console.log(response.data); // Cek data yang diterima dari API

        // Ambil data berita dari respons API
        const beritaArray = response.data.data;

        if (Array.isArray(beritaArray)) {
          const beritaData = beritaArray.map((item) => ({
            id: item.id,
            image: item.image,
            title: item.title,
            content: item.content,
            createdAt: item.createdAt,
            authorName: item.author.username,
            isActive: item.isActive,
          }));
          // Ambil status dari localStorage jika ada
          const storedStatus =
            JSON.parse(localStorage.getItem("enabledStatus")) || {};
          // Update status acara dengan localStorage jika tersedia
          const updatedStatus = {};
          beritaData.forEach((item) => {
            updatedStatus[item.id] = storedStatus[item.id] ?? item.isActive;
          });

          setEnabledStatus(updatedStatus);
          setBerita(beritaData);
        } else {
          console.error("Data yang diterima bukan array:", beritaArray);
        }
      } catch (error) {
        console.error("Error fetching program: ", error);
      }
    };

    fetchBerita();
  }, [username]);

  // Simpan status ke localStorage setiap kali berubah
  useEffect(() => {
    localStorage.setItem("enabledStatus", JSON.stringify(enabledStatus));
  }, [enabledStatus]);

  return (
    <>
      <OffcanvasDashboard />
      <Container>
        <h1 className="text-center">BAGIKAN BERITA</h1>
        <hr className="custom-hr" />
      </Container>
      <TabelBagikanBerita
        berita={berita}
        enabledStatus={enabledStatus}
        setEnabledStatus={setEnabledStatus}
      />
    </>
  );
}

export default BagikanBerita;
