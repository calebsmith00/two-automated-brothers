import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import React, { SyntheticEvent, useState } from "react";
import NavbarTab from "./navbarTab";

export default function Navbar() {
  const [value, setValue] = useState(0);

  const handleTabClick = (link: number) => {
    setValue(link);
  };

  return (
    <>
      {/* List of tabs */}
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} aria-label="nav tabs">
          <NavbarTab
            href="/"
            label="Home"
            value={0}
            handleTabClick={handleTabClick}
          />

          <NavbarTab
            href="/time-keeping"
            label="Time Keeping"
            value={1}
            handleTabClick={handleTabClick}
          />
        </Tabs>
      </Box>
    </>
  );
}
