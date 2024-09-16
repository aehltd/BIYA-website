import Head from "next/head";

import InvestorsPageBanner from "../components/banner/investorsPageBanner";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

export default function About() {
  return (
    <>
      <Head>
        <title>Investors | BIYA</title>
        <meta
          name="description"
          content="Learn more about BIYA, our mission, vision, and values."
        />
      </Head>

      <InvestorsPageBanner />

      <div className="container py-8">
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography
              className="text-black font-bold tracking-widest py-4"
              variant="h4"
              component="h4"
            >
              Investor Overview
            </Typography>
          </Grid>
          <Grid size={12}>
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1726244508/image1_wapdy2.png"
              alt="Business Description"
            ></img>
          </Grid>
          <Grid size={12}>
            <Typography variant="body1" gutterBottom>
              Baiya International Group Inc. (“Baiya”, or the “Company”) was
              incorporated on October 18, 2021, under the laws of the Cayman
              Islands with limited liability. As a holding company with no
              material operations of its own, Baiya conducts all of the
              operations in mainland China of People’s Republic of China (“PRC”
              or “China”) through the contractual arrangements (the “Contractual
              Arrangements”), with Shenzhen Gongwuyuan Network Technology Co.,
              Ltd. (“Gongwuyuan”), which is a variable interest entity (the
              “VIE”), and its subsidiaries, or collectively, “PRC operating
              entities”. The PRC operating entities mainly engaged in providing
              job matching service, entrusted recruitment service, project
              outsourcing service and labor dispatching service to business
              enterprises and organizations in the flexible employment market
              within China, primarily in the core manufacturing regions
              including the Pearl River Delta and Yangtze River Delta region.
              Baiya International Group Inc.
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
