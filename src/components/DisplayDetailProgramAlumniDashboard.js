import { Container, Stack } from "react-bootstrap";

function DisplayDetailProgramAlumniDashboard({ programAlumni }) {
  return (
    <Container className="mt-5">
      <Stack gap={3}>
        <div className="p-2">
          <h1 className="custom-title">{programAlumni.title}</h1>
          <br></br>
          <p className="custom-date">
            Diunggah pada: {programAlumni.createdAt}
          </p>
          <p className="custom-author">
            Dibuat oleh: {programAlumni.authorName}
          </p>
        </div>
        <div>
          <img
            src={programAlumni.image}
            alt={programAlumni.title}
            style={{
              width: "50%",
              height: "300px",
              display: "block",
              margin: "0 auto",
            }}
          />
        </div>
        <div className="p-2">
          <p className="custom-description">{programAlumni.description}</p>
        </div>
      </Stack>
    </Container>
  );
}

export default DisplayDetailProgramAlumniDashboard;
