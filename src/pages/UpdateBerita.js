import FormUpdateBerita from "../components/FormUpdateBerita";
import OffcanvasDashboard from "../components/OffcanvasDashboard";
import { Stack } from "react-bootstrap";

function UpdateBerita() {
  return (
    <Stack>
      <div className="p-2">
        <OffcanvasDashboard />
      </div>
      <FormUpdateBerita />
    </Stack>
  );
}

export default UpdateBerita;
