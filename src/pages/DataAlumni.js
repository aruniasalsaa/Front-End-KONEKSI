import { Container } from "react-bootstrap";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import TabelDataAlumni from "../components/TabelDataAlumni";
import PaginationData from "../components/PaginationData";

function DataAlumni() {
  return (
    <>
      <OffcanvasDashboard />
      <Container>
      <h1 className="text-center">DATA ALUMNI</h1>
      <hr className="custom-hr" />
      </Container>
      <TabelDataAlumni />
      <Container className="mt-5">
        <div className="d-flex justify-content-end">
          <PaginationData/>
        </div>
      </Container>
    </>
  );
}

export default DataAlumni;
