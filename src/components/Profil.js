import React, { useEffect, useState } from "react";
import { Container, Image, Col, Form, Row, Spinner, Button } from "react-bootstrap";
import { useGlobal } from "../context/GlobalContext";
import { getProfile } from "../api/Api";
import myProfil from "../assets/images/photo1.jpeg";

function Profil() {
  const { globalData } = useGlobal();
  const { role, id } = globalData;

  // State untuk menyimpan data profil
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mengambil data profil berdasarkan id dari global context
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }

    getProfile(id)
      .then((response) => {
        const data = response.data.data;

        // Mengonversi skills jika berupa string JSON
        const skills = Array.isArray(data.skills)
          ? data.skills
          : data.skills
          ? JSON.parse(data.skills) // Mengonversi string JSON ke array
          : [];

        setProfileData({ ...data, skills }); // Mengupdate profileData dengan array skills
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
        setLoading(false);
      });
  }, [id]);

  // Menampilkan loading spinner jika data masih dimuat
  if (loading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  // Jika profileData masih null atau kosong, tampilkan loading lagi
  if (!profileData) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <div className="profile-container">
        <Image className="custom-image" src={myProfil} roundedCircle />
        <h2 className="profile-name">
          {role === "admin_universitas" && "Admin Universitas"}
          {role === "admin_prodi" && "Admin Program Studi"}
          {role === "alumni" && profileData.fullName}
        </h2>
      </div>

      <Form className="mb-5">
        {role === "alumni" && (
          <>
            <Form.Group controlId="formFile" className="mb-3 mt-5">
              <Form.Label>Edit Foto Profil</Form.Label>
              <Form.Control type="file" />
            </Form.Group>

            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formNamaLengkap">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control
                  type="text"
                  value={profileData.fullName || ""}
                  className="custom-form"
                  readOnly
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formNPM">
                <Form.Label>NPM</Form.Label>
                <Form.Control
                  type="text"
                  value={profileData.studentIdentificationNumber || ""}
                  className="custom-form"
                  readOnly
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formProgramStudi">
                <Form.Label>Program Studi</Form.Label>
                <Form.Control
                  type="text"
                  value={profileData.studyProgram || ""}
                  className="custom-form"
                  readOnly
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formTahunLulus">
                <Form.Label>Tahun Lulus</Form.Label>
                <Form.Control
                  type="number"
                  value={profileData.yearGraduated || ""}
                  className="custom-form"
                  readOnly
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formNomorTelepon">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Nomor Telepon Anda"
                  value={profileData.telephone || ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formPekerjaan">
                <Form.Label>Bidang Pekerjaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Pekerjaan Anda"
                  value={profileData.work || ""}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formPerusahaan">
                <Form.Label>Perusahaan</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Perusahaan Tempat Anda Bekerja"
                  value={profileData.telephone || ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formPekerjaan">
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Akun LinkedIn Anda"
                  value={profileData.work || ""}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formSkills">
                <Form.Label>Skills</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Skills yang Anda Miliki"
                  value={profileData.skills.join(", ") || ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formWirausaha">
                <Form.Label>Wirausaha</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Wirausaha yang Anda Jalani"
                  value={profileData.entrepreneur || ""}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3 mt-5">
              <Form.Group as={Col} controlId="formKompetensi">
                <Form.Label>Kompetensi</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukkan Kompetensi Anda"
                  value={profileData.competencies || ""}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formPerkembanganKarier">
                <Form.Label>Perkembangan Karier</Form.Label>
                <Form.Control
                  enable
                  type="text"
                  placeholder="Masukkan Perkembangan Karier Anda"
                  value={profileData.career || ""}
                />
              </Form.Group>
            </Row>
          </>
        )}
      </Form>
      <div className="text-end mb-5">
      <Button variant="success" >Simpan Perubahan</Button>
      </div>

    </Container>
  );
}

export default Profil;
