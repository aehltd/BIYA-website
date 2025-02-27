import Head from "next/head";

import InvestorsPageBanner from "../components/banner/investorsPageBanner";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Divider from "@mui/material/Divider";

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
              src="https://res.cloudinary.com/aehl/image/upload/v1726508826/banner4_rwlixj.png"
              alt="Business Description"
            ></img>
          </Grid>
          <Grid size={12}>
            <Typography variant="body1" gutterBottom>
              We are a leading human resource (“HR”) technology company utilizing our cloud-based internet platform, Gongwuyuan Platform, to provide one-stop crowdsourcing recruitment and SaaS-enabled HR solutions in China’s flexible employment marketplace.
              <br />
              <br />
              We offer four core services—job matching, entrusted recruitment, project outsourcing, and labor dispatching, primarily in the core manufacturing regions of China.
              <br />
              <br />
              Launched in November 2019, our Gongwuyuan Platform features innovative tools designed to enhance user experience, optimize job referrals, and improve HR-related services, complemented by our offline flexible employment matching services.

            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography
              className="text-black font-bold tracking-widest py-4"
              variant="h4"
              component="h4"
            >
              Financials
            </Typography>
          </Grid>
          <Grid size={6}>
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1726508826/image1_w1beek.png"
              alt="Business Description"
            ></img>
          </Grid>
          <Grid size={6}>
            <Typography variant="h6" gutterBottom>
              Download financial data
            </Typography>
            <Divider />
            <Typography variant="subtitle2" gutterBottom>
              To request our financial information, please contact us via email:
              info@biyainc.com
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
