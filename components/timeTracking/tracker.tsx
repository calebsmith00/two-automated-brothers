import { SyntheticEvent, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import { ChangeEvent } from "react";
import TimeElapsed from "./timeElapsed";

type TrackerProps = {
  updateTracking: Function;
};

export default function Tracker({ updateTracking }: TrackerProps) {
  const [seconds, setSeconds] = useState<number>(0);
  const [jobName, setJobName] = useState<string>("");

  useEffect(() => {
    setTimeout(() => setSeconds(seconds + 1), 1000);
  }, [seconds]);

  const handleChangeJobTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setJobName(value);
  };

  const handleFinishTracking = () => {
    updateTracking(false);

    const job = {
      jobName,
      jobTimeElapsed: seconds,
    };

    const session = sessionStorage.getItem("jobs") || JSON.stringify("");
    sessionStorage.setItem(
      "jobs",
      JSON.stringify([...JSON.parse(session), job])
    );
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TextField
        sx={{ marginTop: "10px" }}
        id="outlined-basic"
        variant="outlined"
        label="Name this job to save it"
        size="small"
        onChange={handleChangeJobTitle}
      />

      <TimeElapsed jobName={jobName} seconds={seconds} />

      <Button variant="contained" onClick={handleFinishTracking}>
        Stop Tracking
      </Button>
    </Box>
  );
}
