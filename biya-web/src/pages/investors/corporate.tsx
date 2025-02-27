import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import IrPageBanner from "../../components/banner/irPageBanner";
import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";

// import Image from "next/image";

import ManagementTeam from "@/components/investors/managementTeam";
import BoardOfDirectors from "../../components/investors/board2"
import CommitteeComposition from "@/components/investors/committeeComposition";
import DiversityMatrix from "@/components/investors/diversityMatrix";
import DocumentsTable from "@/components/investors/Documents-table";
// import ComingSoon from "@/components/upComing";

export default function Corporate() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="container pt-[60px]">
      <IrPageBanner title="Corporate Governance" />

      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Management Team" value="1" />
              <Tab label="Board of Directors" value="2" />
              <Tab label="Documents" value="3" />
              <Tab label="Committee Composition" value="4" />
              <Tab label="Diversity Matrix" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ManagementTeam />
          </TabPanel>
          <TabPanel value="2">
            {" "}
            <Typography>Board of Directors</Typography>
            <div className="py-5">
              <BoardOfDirectors />
            </div>
            {/* <Divider />
            <div className="py-3">
              <Image
                src="https://res.cloudinary.com/aehl/image/upload/v1726250854/table_r5jtij.png"
                width={700}
                height={500}
                alt="Table of Board of Directors"
              />
            </div> */}
          </TabPanel>
          <TabPanel value="3"><DocumentsTable /></TabPanel>
          <TabPanel value="4"><CommitteeComposition /></TabPanel>
          <TabPanel value="5"><DiversityMatrix /></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
