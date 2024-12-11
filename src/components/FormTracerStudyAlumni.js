import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

function FormTracerStudyAlumni() {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center">TRACER STUDY</h1>
      <hr className="custom-hr" />
      <Form>
        <h3 className="mb-4">Identitas</h3>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formNPM">
            <Form.Label>NPM</Form.Label>
            <Form.Control type="text" placeholder="NPM" />
          </Form.Group>

          <Form.Group as={Col} controlId="formPerusahaan">
            <Form.Label>Perusahaan</Form.Label>
            <Form.Control type="text" placeholder="Perusahaan" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formTahunLulus">
            <Form.Label>Tahun Lulus</Form.Label>
            <Form.Control type="text" placeholder="Tahun Lulus" />
          </Form.Group>

          <Form.Group as={Col} controlId="formProdi">
            <Form.Label>Prodi</Form.Label>
            <Form.Control type="text" placeholder="Prodi" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formNama">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Nama Lengkap" />
          </Form.Group>

          <Form.Group as={Col} controlId="formNIK">
            <Form.Label>NIK</Form.Label>
            <Form.Control type="text" placeholder="NIK" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formNomorTelepon">
            <Form.Label>Nomor Telepon/HP</Form.Label>
            <Form.Control type="text" placeholder="Masukkan Nomor Telepon" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Masukkan Email" />
          </Form.Group>
        </Row>
      </Form>

      <Form className="mt-5">
        <h3 className="mb-4">Kuesioner</h3>
        <Row>
          <Form.Group>
            <p>1. Jelaskan status Anda saat ini!*</p>
            <div className="mb-4">
              <Form.Check
                type="radio"
                name="status"
                id="bekerja"
                value="Bekerja (full time/part time)"
                label="Bekerja (full time/part time)"
                checked={selectedStatus === "Bekerja (full time/part time)"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="status"
                id="belumMemungkinkanBekerja"
                value="Belum Memungkinkan Bekerja"
                label="Belum Memungkinkan Bekerja"
                checked={selectedStatus === "Belum Memungkinkan Bekerja"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="status"
                id="wiraswasta"
                value="Wiraswasta"
                label="Wiraswasta"
                checked={selectedStatus === "Wiraswasta"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="status"
                id="melanjutkanPendidikan"
                value="Melanjutkan Pendidikan"
                label="Melanjutkan Pendidikan"
                checked={selectedStatus === "Melanjutkan Pendidikan"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="status"
                id="sedangMencari"
                value="Tidak kerja tapi sedang mencari kerja"
                label="Tidak kerja tapi sedang mencari kerja"
                checked={
                  selectedStatus === "Tidak kerja tapi sedang mencari kerja"
                }
                onChange={handleStatusChange}
              />
            </div>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group>
            <p>
              2. Dalam berapa bulan setelah lulus Anda mendapatkan pekerjaan
              pertama? (Jika Memilih Bekerja)
            </p>
            <p className="ms-3">
              Dalam berapa bulan setelah lulus Anda memulai wiraswasta? (Jika
              Memilih Wiraswasta)
            </p>
            <Form.Control type="text" id="inputBulan" className="ms-3" />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group>
            <p>
              3. Berapa rata-rata pendapatan Anda per bulan? (take home pay?)
            </p>
            <Form.Control type="text" id="inputPendapatan" className="ms-3" />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <p>4. Dimana lokasi tempat Anda bekerja?</p>

          <Form.Group as={Col} controlId="formProvinsi" className="ms-3">
            <Form.Label>Provinsi</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formKota" className="ms-3">
            <Form.Label>Kota/Kabupaten</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group>
            <p>
              5. Apa jenis perusahaan/instansi/institusi tempat Anda bekerja
              sekarang?
            </p>
            <div className="mb-4 ms-3">
              <Form.Check
                type="radio"
                name="jenisPerusahaan"
                id="instansiPemerintah"
                value="Instansi Pemerintah"
                label="Instansi Pemerintah"
                checked={selectedStatus === "Instansi Pemerintah"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="jenisPerusahaan"
                id="bumn"
                value="BUMN/BUMD"
                label="BUMN/BUMD"
                checked={selectedStatus === "BUMN/BUMD"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="jenisPerusahaan"
                id="institusi"
                value="Institusi/Organisasi Multilateral"
                label="Institusi/Organisasi Multilateral"
                checked={selectedStatus === "Institusi/Organisasi Multilateral"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="jenisPerusahaan"
                id="lsm"
                value="Organisasi non-profit/Lembaga Swadaya Masyarakat"
                label="Organisasi non-profit/Lembaga Swadaya Masyarakat"
                checked={
                  selectedStatus ===
                  "Organisasi non-profit/Lembaga Swadaya Masyarakat"
                }
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="jenisPerusahaan"
                id="perusahaanSwasta"
                value="Perusahaan Swasta"
                label="Perusahaan Swasta"
                checked={selectedStatus === "Perusahaan Swasta"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="jenisPerusahaan"
                id="perusahaanSendiri"
                value="Wiraswasta"
                label="Wiraswasta"
                checked={selectedStatus === "Wiraswasta"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="jenisPerusahaan"
                id="lainnya"
                value="Lainnya, tuliskan"
                label="Lainnya, tuliskan"
                checked={selectedStatus === "Lainnya, tuliskan"}
                onChange={handleStatusChange}
              />
              <Row className="mb-3 mt-3">
                <Form.Group
                  as={Col}
                  controlId="formPekerjaanLainnya"
                  className="ms-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Pekerjaan Anda!"
                  />
                </Form.Group>
              </Row>
            </div>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group>
            <p>6. Apa nama perusahaan/kantor tempat Anda bekerja?</p>
            <Form.Control
              type="text"
              id="inputNamaPerusahaan"
              className="ms-3"
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group>
            <p>
              7. Bila berwiraswasta, apa posisi/jabatan Anda saat ini? (Apabila
              1 menjawab [3] wiraswasta)
            </p>
            <Form.Control
              type="text"
              id="inputJabatanWiraswasta"
              className="ms-3"
            />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group>
            <p>8. Apa tingkat tempat kerja Anda?</p>
            <Form.Select aria-label="Tingkat Tempat Kerja" className="ms-3">
              <option>Silakan Pilih</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <p>9. Pertanyaan studi lanjut</p>
          <Form.Group
            as={Col}
            controlId="formBiayaStudiLanjut"
            className="ms-3"
          >
            <Form.Label>Sumber Biaya</Form.Label>
            <Form.Select aria-label="Biaya Studi Lanjut">
              <option>Silakan Pilih</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formPerguruanTinggi" className="ms-3">
            <Form.Label>Perguruan Tinggi</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formProgramStudi" className="ms-3">
            <Form.Label>Program Studi</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group as={Col} controlId="formTanggalMasuk" className="ms-3">
            <Form.Label>Tanggal Masuk</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Row>

        <Row>
          <Form.Group>
            <p>
              10. Sebutkan sumber dana dalam pembiayaan kuliah!* (bukan ketika
              Studi lanjut)
            </p>
            <div className="mb-4 ms-4">
              <Form.Check
                type="radio"
                name="biayaKuliah"
                id="biayaSendiri"
                value="Biaya Sendiri/Keluarga"
                label="Biaya Sendiri/Keluarga"
                checked={selectedStatus === "Biaya Sendiri/Keluarga"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="biayaKuliah"
                id="beasiswaADIK"
                value="Beasiswa ADIK"
                label="Beasiswa ADIK"
                checked={selectedStatus === "Beasiswa ADIK"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="biayaKuliah"
                id="cukupErat"
                value="Beasiswa BIDIKMISI"
                label="Beasiswa BIDIKMISI"
                checked={selectedStatus === "Beasiswa BIDIKMISI"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="biayaKuliah"
                id="beasiswaPPA"
                value="Beasiswa PPA"
                label="Beasiswa PPA"
                checked={selectedStatus === "Beasiswa PPA"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="biayaKuliah"
                id="beasiswaAfirmasi"
                value="Beasiswa AFIRMASI"
                label="Beasiswa AFIRMASI"
                checked={selectedStatus === "Beasiswa AFIRMASI"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="biayaKuliah"
                id="beasiswaPerusahaan"
                value="Beasiswa Perusahaan/Swasta"
                label="Beasiswa Perusahaan/Swasta"
                checked={selectedStatus === "Beasiswa Perusahaan/Swasta"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="biayaKuliah"
                id="lainnya"
                value="Lainnya, tuliskan"
                label="Lainnya, tuliskan"
                checked={selectedStatus === "Lainnya, tuliskan"}
                onChange={handleStatusChange}
              />
              <Row className="mb-3 mt-3">
                <Form.Group
                  as={Col}
                  controlId="formPekerjaanLainnya"
                  className="ms-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Masukkan Biaya Kuliah Anda!"
                  />
                </Form.Group>
              </Row>
            </div>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group>
            <p>
              11. Seberapa erat hubungan bidang studi dengan pekerjaan Anda?*
            </p>
            <div className="mb-4 ms-4">
              <Form.Check
                type="radio"
                name="hubunganSutdiPekerjaan"
                id="sangatErat"
                value="Sangat Erat"
                label="Sangat Erat"
                checked={selectedStatus === "Sangat Erat"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="hubunganStudiPekerjaan"
                id="erat"
                value="Erat"
                label="Erat"
                checked={selectedStatus === "Erat"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="hubunganStudiPekerjaan"
                id="cukupErat"
                value="Cukup Erat"
                label="Cukup Erat"
                checked={selectedStatus === "Cukup Erat"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="hununganStudiPekerjaan"
                id="kurangErat"
                value="Kurang Erat"
                label="Kurang Erat"
                checked={selectedStatus === "Kurang Erat"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="hubunganStudiPekerjaan"
                id="tidakSamaSekali"
                value="Tidak Sama Sekali"
                label="Tidak Sama Sekali"
                checked={selectedStatus === "Tidak Sama Sekali"}
                onChange={handleStatusChange}
              />
            </div>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group>
            <p>
              12. Tingkat pendidikan apa yang paling tepat/sesuai untuk
              pekerjaan Anda saat ini?*
            </p>
            <div className="mb-4 ms-4">
              <Form.Check
                type="radio"
                name="tingkatPendidikan"
                id="lebihTinggi"
                value="Setingkat Lebih Tinggi"
                label="Setingkat Lebih Tinggi"
                checked={selectedStatus === "Setingkat Lebih Tinggi"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="tingkatPendidikan"
                id="sama"
                value="Tingkat yang Sama"
                label="Tingkat yang Sama"
                checked={selectedStatus === "Tingkat yang Sama"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="tingkatPendidikan"
                id="lebihRendah"
                value="Setingkat Lebih Rendah"
                label="Setingkat Lebih Rendah"
                checked={selectedStatus === "Setingkat Lebih Rendah"}
                onChange={handleStatusChange}
              />
              <Form.Check
                type="radio"
                name="tingkatPendidikan"
                id="tidakPerlu"
                value="Tidak Perlu Pendidikan Tinggi"
                label="Tidak Perlu Pendidikan Tinggi"
                checked={selectedStatus === "Tidak Perlu Pendidikan Tinggi"}
                onChange={handleStatusChange}
              />
            </div>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group>
            <p>13. Isilah Pertanyaan Kompetensi di Bawah Ini!</p>
            <p className="ms-4">
              A. Pada saat lulus, pada tingkat mana kompetensi di bawah ini Anda
              kuasai?*
            </p>
            <Row className="ms-4 mt-3">
              <Col md={3}>Etika</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kompetensiEtikaSaatLulus"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kompetensiEtikaSaatLulus"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kompetensiEtikaSaatLulus"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kompetensiEtikaSaatLulus"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kompetensiEtikaSaatLulus"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>
            <Row className="ms-4 mt-3">
              <Col md={3}>Keahlian berdasarkan bidang ilmu</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuSaatLulus"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuSaatLulus"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuSaatLulus"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuSaatLulus"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuSaatLulus"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>
            <Row className="ms-4 mt-3">
              <Col md={3}>Bahasa Inggris</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisSaatLulus"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisSaatLulus"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisSaatLulus"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisSaatLulus"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisSaatLulus"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>
            <Row className="ms-4 mt-3">
              <Col md={3}>Penggunaan Teknologi Informasi</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="penggunaanTeknologiSaatLulus"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="penggunaanTeknologiSaatLulus"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="penggunaanTeknologiSaatLulus"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="penggunaanTeknologiSaatLulus"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="penggunaanTeknologiSaatLulus"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>
            <Row className="ms-4 mt-3">
              <Col md={3}>Komunikasi</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiSaatLulus"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiSaatLulus"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiSaatLulus"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiSaatLulus"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiSaatLulus"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>
            <Row className="ms-4 mt-3">
              <Col md={3}>Kerja sama tim</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaSaatLulus"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaSaatLulus"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaSaatLulus"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaSaatLulus"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaSaatLulus"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>
            <Row className="ms-4 mt-3">
              <Col md={3}>Pengembangan</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganSaatLulus"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganSaatLulus"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganSaatLulus"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganSaatLulus"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganSaatLulus"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <p className="ms-4 mt-4">
              B. Pada saat ini, pada tingkat mana kompetensi di bawah ini
              diperlukan dalam pekerjaan?*
            </p>
            <Row className="ms-4 mt-3">
              <Col md={3}>Etika</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="etikaDalamKerja"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="etikaDalamKerja"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="etikaDalamKerja"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="etikaDalamKerja"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="etikaDalamKerja"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <Row className="ms-4 mt-3">
              <Col md={3}>Keahlian berdasarkan bidang ilmu</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuDalamKerja"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuDalamKerja"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuDalamKerja"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuDalamKerja"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="keahlianBidangIlmuDalamKerja"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <Row className="ms-4 mt-3">
              <Col md={3}>Bahasa Inggris</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisDalamKerja"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisDalamKerja"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisDalamKerja"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisDalamKerja"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="bahasaInggrisDalamKerja"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <Row className="ms-4 mt-3">
              <Col md={3}>Penggunaan Teknologi Informasi</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="teknologiInformasiDalamKerja"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="teknologiInformasiDalamKerja"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="teknologiInformasiDalamKerja"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="teknologiInformasiDalamKerja"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="teknologiInformasiDalamKerja"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <Row className="ms-4 mt-3">
              <Col md={3}>Komunikasi</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiDalamKerja"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiDalamKerja"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiDalamKerja"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiDalamKerja"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="komunikasiDalamKerja"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <Row className="ms-4 mt-3">
              <Col md={3}>Kerja Sama Tim</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaTimDalamKerja"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaTimDalamKerja"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaTimDalamKerja"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaTimDalamKerja"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="kerjaSamaTimDalamKerja"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <Row className="ms-4 mt-3">
              <Col md={3}>Pengembangan</Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganDalamKerja"
                  id="sangatRendah"
                  value="Sangat Rendah"
                  label="Sangat Rendah"
                  checked={selectedStatus === "Sangat Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganDalamKerja"
                  id="rendah"
                  value="Rendah"
                  label="Rendah"
                  checked={selectedStatus === "Rendah"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganDalamKerja"
                  id="standar"
                  value="Standar"
                  label="Standar"
                  checked={selectedStatus === "Standar"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganDalamKerja"
                  id="tinggi"
                  value="Tinggi"
                  label="Tinggi"
                  checked={selectedStatus === "Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  name="pengembanganDalamKerja"
                  id="sangatTinggi"
                  value="Sangat Tinggi"
                  label="Sangat Tinggi"
                  checked={selectedStatus === "Sangat Tinggi"}
                  onChange={handleStatusChange}
                />
              </Col>
            </Row>

            <Row className="mt-4">
              <p>
                14. Menurut Anda seberapa besar penekanan pada metode
                pembelajaran di bawah ini dilaksanakan di program studi Anda?*
              </p>
              <Row className="ms-4">
                <Col>
                  <Row>Perkuliahan</Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePerkuliahan"
                      id="sangatBesar"
                      value="Sangat Besar"
                      label="Sangat Besar"
                      checked={selectedStatus === "Sangat Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePerkuliahan"
                      id="besar"
                      value="Besar"
                      label="Besar"
                      checked={selectedStatus === "Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePerkuliahan"
                      id="cukupBesar"
                      value="Cukup Besar"
                      label="Cukup Besar"
                      checked={selectedStatus === "Cukup Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePerkuliahan"
                      id="kurangBesar"
                      value="Kurang Besar"
                      label="Kurang Besar"
                      checked={selectedStatus === "Kurang Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePerkuliahan"
                      id="tidakSamaSekali"
                      value="Tidak Sama Sekali"
                      label="Tidak Sama Sekali"
                      checked={selectedStatus === "Tidak Sama Sekali"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                </Col>

                <Col>
                  <Row>Demonstrasi</Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDemonstrasi"
                      id="sangatBesar"
                      value="Sangat Besar"
                      label="Sangat Besar"
                      checked={selectedStatus === "Sangat Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDemonstrasi"
                      id="besar"
                      value="Besar"
                      label="Besar"
                      checked={selectedStatus === "Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDemonstrasi"
                      id="cukupBesar"
                      value="Cukup Besar"
                      label="Cukup Besar"
                      checked={selectedStatus === "Cukup Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDemonstrasi"
                      id="kurangBesar"
                      value="Kurang Besar"
                      label="Kurang Besar"
                      checked={selectedStatus === "Kurang Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDemonstrasi"
                      id="tidakSamaSekali"
                      value="Tidak Sama Sekali"
                      label="Tidak Sama Sekali"
                      checked={selectedStatus === "Tidak Sama Sekali"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                </Col>
              </Row>

              <Row className="ms-4 mt-4">
                <Col>
                  <Row>Partisipasi dalam proyek riset</Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="partisipasiProyekRiset"
                      id="sangatBesar"
                      value="Sangat Besar"
                      label="Sangat Besar"
                      checked={selectedStatus === "Sangat Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="partisipasiProyekRiset"
                      id="besar"
                      value="Besar"
                      label="Besar"
                      checked={selectedStatus === "Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="partisipasiProyekRiset"
                      id="cukupBesar"
                      value="Cukup Besar"
                      label="Cukup Besar"
                      checked={selectedStatus === "Cukup Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="partisipasiProyekRiset"
                      id="kurangBesar"
                      value="Kurang Besar"
                      label="Kurang Besar"
                      checked={selectedStatus === "Kurang Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="partisipasiProyekRiset"
                      id="tidakSamaSekali"
                      value="Tidak Sama Sekali"
                      label="Tidak Sama Sekali"
                      checked={selectedStatus === "Tidak Sama Sekali"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                </Col>
                <Col>
                  <Row>Magang</Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="magang"
                      id="sangatBesar"
                      value="Sangat Besar"
                      label="Sangat Besar"
                      checked={selectedStatus === "Sangat Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="magang"
                      id="besar"
                      value="Besar"
                      label="Besar"
                      checked={selectedStatus === "Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="magang"
                      id="cukupBesar"
                      value="Cukup Besar"
                      label="Cukup Besar"
                      checked={selectedStatus === "Cukup Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="magang"
                      id="kurangBesar"
                      value="Kurang Besar"
                      label="Kurang Besar"
                      checked={selectedStatus === "Kurang Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="magang"
                      id="tidakSamaSekali"
                      value="Tidak Sama Sekali"
                      label="Tidak Sama Sekali"
                      checked={selectedStatus === "Tidak Sama Sekali"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                </Col>
              </Row>

              <Row className="ms-4 mt-4">
                <Col>
                  <Row>Praktikum</Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePraktikum"
                      id="sangatBesar"
                      value="Sangat Besar"
                      label="Sangat Besar"
                      checked={selectedStatus === "Sangat Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePraktikum"
                      id="besar"
                      value="Besar"
                      label="Besar"
                      checked={selectedStatus === "Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePraktikum"
                      id="cukupBesar"
                      value="Cukup Besar"
                      label="Cukup Besar"
                      checked={selectedStatus === "Cukup Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePraktikum"
                      id="kurangBesar"
                      value="Kurang Besar"
                      label="Kurang Besar"
                      checked={selectedStatus === "Kurang Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodePraktikum"
                      id="tidakSamaSekali"
                      value="Tidak Sama Sekali"
                      label="Tidak Sama Sekali"
                      checked={selectedStatus === "Tidak Sama Sekali"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                </Col>
                <Col>
                  <Row>Kerja Lapangan</Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeKerjaLapangan"
                      id="sangatBesar"
                      value="Sangat Besar"
                      label="Sangat Besar"
                      checked={selectedStatus === "Sangat Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeKerjaLapangan"
                      id="besar"
                      value="Besar"
                      label="Besar"
                      checked={selectedStatus === "Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeKerjaLapangan"
                      id="cukupBesar"
                      value="Cukup Besar"
                      label="Cukup Besar"
                      checked={selectedStatus === "Cukup Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeKerjaLapangan"
                      id="kurangBesar"
                      value="Kurang Besar"
                      label="Kurang Besar"
                      checked={selectedStatus === "Kurang Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeKerjaLapangan"
                      id="tidakSamaSekali"
                      value="Tidak Sama Sekali"
                      label="Tidak Sama Sekali"
                      checked={selectedStatus === "Tidak Sama Sekali"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                </Col>
              </Row>

              <Row className="ms-4 mt-4">
                <Col>
                  <Row>Diskusi</Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDiksusi"
                      id="sangatBesar"
                      value="Sangat Besar"
                      label="Sangat Besar"
                      checked={selectedStatus === "Sangat Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDiksusi"
                      id="besar"
                      value="Besar"
                      label="Besar"
                      checked={selectedStatus === "Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDiksusi"
                      id="cukupBesar"
                      value="Cukup Besar"
                      label="Cukup Besar"
                      checked={selectedStatus === "Cukup Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDiksusi"
                      id="kurangBesar"
                      value="Kurang Besar"
                      label="Kurang Besar"
                      checked={selectedStatus === "Kurang Besar"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                  <Row>
                    <Form.Check
                      type="radio"
                      name="metodeDiksusi"
                      id="tidakSamaSekali"
                      value="Tidak Sama Sekali"
                      label="Tidak Sama Sekali"
                      checked={selectedStatus === "Tidak Sama Sekali"}
                      onChange={handleStatusChange}
                    />
                  </Row>
                </Col>
                <Col></Col>
              </Row>
            </Row>

            <Row className="mt-4">
              <Form.Group>
                <p>15. Kapan Anda mulai mencari pekerjaan?*</p>
                <div className="mb-4 ms-4">
                  <Form.Check
                    type="radio"
                    name="mulaiMencariPekerjaan"
                    id="tigaBulanSebelumLulus"
                    value="Kira-kira 3 bulan sebelum lulus"
                    label="Kira-kira 3 bulan sebelum lulus"
                    checked={
                      selectedStatus === "Kira-kira 3 bulan sebelum lulus"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="mulaiMencariPekerjaan"
                    id="enamBulanSebelumLulus"
                    value="Kira-kira 6 bulan sebelum lulus"
                    label="Kira-kira 6 bulan sebelum lulus"
                    checked={
                      selectedStatus === "Kira-kira 6 bulan sebelum lulus"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="mulaiMencariPekerjaan"
                    id="duaBulanSebelumLulus"
                    value="Kira-kira 2 bulan sebelum lulus"
                    label="Kira-kira 2 bulan sebelum lulus"
                    checked={
                      selectedStatus === "Kira-kira 2 bulan sebelum lulus"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="mulaiMencariPekerjaan"
                    id="satuBulanSebelumLulus"
                    value="Kira-kira 1 bulan sebelum lulus"
                    label="Kira-kira 1 bulan sebelum lulus"
                    checked={
                      selectedStatus === "Kira-kira 1 bulan sebelum lulus"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="mulaiMencariPekerjaan"
                    id="tidakMencariKerja"
                    value="Saya tidak mencari kerja"
                    label="Saya tidak mencari kerja"
                    checked={selectedStatus === "Saya tidak mencari kerja"}
                    onChange={handleStatusChange}
                  />
                </div>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group>
                <p>
                  16. Bagaimana Anda mencari pekerjaan tersebut? Jawaban bisa
                  lebih dari satu*
                </p>
                <div className="mb-4 ms-4">
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="iklan"
                    value="Melalui iklan di koran/majalah, brosur"
                    label="Melalui iklan di koran/majalah, brosur"
                    checked={
                      selectedStatus ===
                      "Melalui iklan di koran/majalah, brosur"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="melamarPerusahaan"
                    value="Melamar ke perusahaan tanpa mengatahui lowongan yang ada"
                    label="Melamar ke perusahaan tanpa mengatahui lowongan yang ada"
                    checked={
                      selectedStatus ===
                      "Melamar ke perusahaan tanpa mengatahui lowongan yang ada"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="bursaKerja"
                    value="Pergi ke bursa/pameran kerja"
                    label="Pergi ke bursa/pameran kerja"
                    checked={selectedStatus === "Pergi ke bursa/pameran kerja"}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="lewatInternet"
                    value="Mencari lewat internet/iklan online/milis"
                    label="Mencari lewat internet/iklan online/milis"
                    checked={
                      selectedStatus ===
                      "Mencari lewat internet/iklan online/milis"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="dihubungiPerusahaan"
                    value="Dihubungi oleh perusahaan"
                    label="Dihubungi oleh perusahaan"
                    checked={selectedStatus === "Dihubungi oleh perusahaan"}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="kemenakertrans"
                    value="Menghubungi Kemenakertrans"
                    label="Menghubungi Kemenakertrans"
                    checked={selectedStatus === "Menghubungi Kemenakertrans"}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="agenTenagaKerja"
                    value="Menghubungi agen tenaga kerja komersial/swasta"
                    label="Menghubungi agen tenaga kerja komersial/swasta"
                    checked={
                      selectedStatus ===
                      "Menghubungi agen tenaga kerja komersial/swasta"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="informasiPusat"
                    value="Memperoleh informasi dari pusat/kantor pengembangan karier fakultas/universitas"
                    label="Memperoleh informasi dari pusat/kantor pengembangan karier fakultas/universitas"
                    checked={
                      selectedStatus ===
                      "Memperoleh informasi dari pusat/kantor pengembangan karier fakultas/universitas"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="kantorKemahasiswaan"
                    value="Menghubungi kantor kemahasiswaan/hubungan alumni"
                    label="Menghubungi kantor kemahasiswaan/hubungan alumni"
                    checked={
                      selectedStatus ===
                      "Menghubungi kantor kemahasiswaan/hubungan alumni"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="jejaring"
                    value="Membangun jejaring (network) sejak masih kuliah"
                    label="Membangun jejaring (network) sejak masih kuliah"
                    checked={
                      selectedStatus ===
                      "Membangun jejaring (network) sejak masih kuliah"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="relasi"
                    value="Melalui relasi (misalnya dosen, orang tua, saudara, teman, dll.)"
                    label="Melalui relasi (misalnya dosen, orang tua, saudara, teman, dll.)"
                    checked={
                      selectedStatus ===
                      "Melalui relasi (misalnya dosen, orang tua, saudara, teman, dll.)"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="bisnisSendiri"
                    value="Membangun bisnis sendiri"
                    label="Membangun bisnis sendiri"
                    checked={selectedStatus === "Membangun bisnis sendiri"}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="penempatanKerja"
                    value="Melalui penempatan kerja atau magang"
                    label="Melalui penempatan kerja atau magang"
                    checked={
                      selectedStatus === "Melalui penempatan kerja atau magang"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="tempatKerjaSama"
                    value="Bekerja di tempat yang sama dengan tempat kerja semasa kuliah"
                    label="Bekerja di tempat yang sama dengan tempat kerja semasa kuliah"
                    checked={
                      selectedStatus ===
                      "Bekerja di tempat yang sama dengan tempat kerja semasa kuliah"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="mencariKerja"
                    id="lainnya"
                    value="Lainnya"
                    label="Lainnya"
                    checked={selectedStatus === "Lainnya"}
                    onChange={handleStatusChange}
                  />

                  <Row className="mb-3 mt-3">
                    <Form.Group
                      as={Col}
                      controlId="formMencariKerja"
                      className="ms-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Masukkan cara Anda mencari pekerjaan!"
                      />
                    </Form.Group>
                  </Row>
                </div>
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <p>
                17. Berapa perusahaan/instansi/institusi yang sudah Anda lamar?
                (lewat surat atau email) sebelum Anda memeroleh pekerjaan
                pertama?
              </p>
              <Col className="ms-3">
                <Form.Group
                  as={Col}
                  controlId="jumlahPerusahaan"
                  className="ms-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Masukkan jumlah perusahaan yang Anda lamar!"
                  />
                </Form.Group>
              </Col>
              <Col>
                <p>perusahaan/instansi/institusi</p>
              </Col>
            </Row>

            <Row className="mt-4">
              <p>
                18. Berapa perusahaan/instansi/institusi yang merespon lamaran
                Anda?
              </p>
              <Col className="ms-3">
                <Form.Group
                  as={Col}
                  controlId="perusahaanYangMerespon"
                  className="ms-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Masukkan jumlah perusahaan yang merespon lamaran Anda!"
                  />
                </Form.Group>
              </Col>
              <Col>
                <p>perusahaan/instansi/institusi</p>
              </Col>
            </Row>

            <Row className="mt-4">
              <p>
                19. Berapa perusahaan/instansi/institusi yang mengundang Anda
                untuk wawancara?
              </p>
              <Col className="ms-3">
                <Form.Group
                  as={Col}
                  controlId="perusahaanYangMengundang"
                  className="ms-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Masukkan jumlah perusahaan yang mengundang Anda!"
                  />
                </Form.Group>
              </Col>
              <Col>
                <p>perusahaan/instansi/institusi</p>
              </Col>
            </Row>

            <Row className="mt-4">
              <Form.Group>
                <p>
                  20. Apakah Anda aktif mencari pekerjaan dalam 4 minggu
                  terakhir? Pilihlah satu jawaban!
                </p>
                <div className="mb-4 ms-4">
                  <Form.Check
                    type="radio"
                    name="aktifMencariPekerjaan"
                    id="tidak"
                    value="Tidak"
                    label="Tidak"
                    checked={selectedStatus === "Tidak"}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="aktifMencariPekerjaan"
                    id="menungguHasilLamaran"
                    value="Tidak, tapi saya sedang menunggu hasil lamaran kerja"
                    label="Tidak, tapi saya sedang menunggu hasil lamaran kerja"
                    checked={
                      selectedStatus ===
                      "Tidak, tapi saya sedang menunggu hasil lamaran kerja"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="aktifMencariPekerjaan"
                    id="akanMulaiBekerja"
                    value="Ya, saya akan mulai bekerja dalam 2 minggu ke dapan"
                    label="Ya, saya akan mulai bekerja dalam 2 minggu ke dapan"
                    checked={
                      selectedStatus ===
                      "Ya, saya akan mulai bekerja dalam 2 minggu ke dapan"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="aktifMencariPekerjaan"
                    id="belumPastiAkanBekerja"
                    value="Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan"
                    label="Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan"
                    checked={
                      selectedStatus ===
                      "Ya, tapi saya belum pasti akan bekerja dalam 2 minggu ke depan"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="radio"
                    name="aktifMencariPekerjaan"
                    id="lainnya"
                    value="Lainnya, tuliskan"
                    label="Lainnya, tuliskan"
                    checked={selectedStatus === "Lainnya, tuliskan"}
                    onChange={handleStatusChange}
                  />
                  <Row className="mb-3 mt-3">
                    <Form.Group
                      as={Col}
                      controlId="formAktifMencariKerja"
                      className="ms-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Masukkan jawaban Anda!"
                      />
                    </Form.Group>
                  </Row>
                </div>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group>
                <p>
                  21. Jika menurut Anda pekerjaan Anda saat ini tidak sesuai dengan pendidikan Anda, mengapa Ada mengambilnya? Jawaban bisa lebih dari satu!
                </p>
                <div className="mb-4 ms-4">
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="sesuai"
                    value="Pertanyaan tidak sesuai; pekerjaan saya sekarang sudah sesuai dengan pendidikan saya."
                    label="Pertanyaan tidak sesuai; pekerjaan saya sekarang sudah sesuai dengan pendidikan saya."
                    checked={
                      selectedStatus ===
                      "Pertanyaan tidak sesuai; pekerjaan saya sekarang sudah sesuai dengan pendidikan saya."
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="belumSesuai"
                    value="Saya belum mendapatkan pekerjaan yang lebih sesuai."
                    label="Saya belum mendapatkan pekerjaan yang lebih sesuai."
                    checked={
                      selectedStatus ===
                      "Saya belum mendapatkan pekerjaan yang lebih sesuai."
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="memerolehProspekKarier"
                    value="Di pekerjaan ini saya memeroleh prospek karier yang baik."
                    label="Di pekerjaan ini saya memeroleh prospek karier yang baik."
                    checked={selectedStatus === "Di pekerjaan ini saya memeroleh prospek karier yang baik."}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="tidakSesuaiPendidikan"
                    id="lewatInternet"
                    value="Saya lebih suka bekerja di area pekerjaan yang tidak ada hunungannya dengan pendidikan saya."
                    label="Saya lebih suka bekerja di area pekerjaan yang tidak ada hunungannya dengan pendidikan saya."
                    checked={
                      selectedStatus ===
                      "Saya lebih suka bekerja di area pekerjaan yang tidak ada hunungannya dengan pendidikan saya."
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="kurangBerhubungan"
                    value="Saya dipromosikan ke posisi yang kurang berhubungan dengan pendidikan saya dibanding posisi sebelumnya."
                    label="Saya dipromosikan ke posisi yang kurang berhubungan dengan pendidikan saya dibanding posisi sebelumnya."
                    checked={selectedStatus === "Saya dipromosikan ke posisi yang kurang berhubungan dengan pendidikan saya dibanding posisi sebelumnya."}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="pendapatanLebihTinggi"
                    value="Saya dapat memeroleh pendapatan yang lebih tinggi di pekerjaan ini."
                    label="Saya dapat memeroleh pendapatan yang lebih tinggi di pekerjaan ini."
                    checked={selectedStatus === "Saya dapat memeroleh pendapatan yang lebih tinggi di pekerjaan ini."}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="lebihAman"
                    value="Pekerjaan saya saat ini lebih aman/terjamin/secure"
                    label="Pekerjaan saya saat ini lebih aman/terjamin/secure"
                    checked={
                      selectedStatus ===
                      "Pekerjaan saya saat ini lebih aman/terjamin/secure"
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="lebihMenarik"
                    value="Pekerjaan saya saat ini lebih menarik."
                    label="Pekerjaan saya saat ini lebih menarik."
                    checked={
                      selectedStatus ===
                      "Pekerjaan saya saat ini lebih menarik."
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="pekerjaanTambahan"
                    value="Pekerjaan saya saat ini lebih memungkinkan saya mengambil pekerjaan tambahan/jadwal yang fleksibel, dll."
                    label="Pekerjaan saya saat ini lebih memungkinkan saya mengambil pekerjaan tambahan/jadwal yang fleksibel, dll."
                    checked={
                      selectedStatus ===
                      "Pekerjaan saya saat ini lebih memungkinkan saya mengambil pekerjaan tambahan/jadwal yang fleksibel, dll."
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="lokasiDekat"
                    value="Pekerjaan saya saat ini lokasinya lebih dekat dari rumah saya."
                    label="Pekerjaan saya saat ini lokasinya lebih dekat dari rumah saya."
                    checked={
                      selectedStatus ===
                      "Pekerjaan saya saat ini lokasinya lebih dekat dari rumah saya."
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="lebihMenjamin"
                    value="Pekerjaan saya saat ini lebih dapat menjamin kebutuhan keluarga saya."
                    label="Pekerjaan saya saat ini lebih dapat menjamin kebutuhan keluarga saya."
                    checked={
                      selectedStatus ===
                      "Pekerjaan saya saat ini lebih dapat menjamin kebutuhan keluarga saya."
                    }
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="awalMenitiKarier"
                    value="Pada awal meniti karier ini, saya harus menerima pekerjaan yang tidak berhubungan dengan pendidikan saya."
                    label="Pada awal meniti karier ini, saya harus menerima pekerjaan yang tidak berhubungan dengan pendidikan saya."
                    checked={selectedStatus === "Pada awal meniti karier ini, saya harus menerima pekerjaan yang tidak berhubungan dengan pendidikan saya."}
                    onChange={handleStatusChange}
                  />
                  <Form.Check
                    type="checkbox"
                    name="kesesuaianPekerjaan"
                    id="lainnya"
                    value="Lainnya"
                    label="Lainnya"
                    checked={
                      selectedStatus === "Lainnya"
                    }
                    onChange={handleStatusChange}
                  />
                  <Row className="mb-3 mt-3">
                    <Form.Group
                      as={Col}
                      controlId="formKesesuaianPekerjaan"
                      className="ms-3"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Masukkan jawaban Anda!"
                      />
                    </Form.Group>
                  </Row>
                </div>
              </Form.Group>
            </Row>

          </Form.Group>
        </Row>
      </Form>
    </Container>
  );
}

export default FormTracerStudyAlumni;