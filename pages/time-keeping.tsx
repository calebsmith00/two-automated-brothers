import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Tracker from "../components/timeTracking/tracker";
import { useState } from "react";

export default function TimeKeeping() {
  const [isTracking, setIsTracking] = useState<boolean>(false);
  return isTracking ? (
    <Tracker updateTracking={setIsTracking} />
  ) : (
    <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: "5px" }}>
      <Button variant="contained" onClick={() => setIsTracking(true)}>
        Start Tracking Now
      </Button>
    </Box>
  );
}
