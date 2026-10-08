import Head from "next/head";
import Image from "next/image";

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
            <Image
              src="/images/investor-overview-banner.webp"
              alt="Business Description"
              width={1600}
              height={900}
              className="w-full h-auto"
            />
          </Grid>
          <Grid size={12}>
            <Typography variant="body1" gutterBottom>
              We are a human resource (“HR”) technology company operating an intelligent SaaS enabled new economy human capital platform focused on the full lifecycle management of freelance talent.
              <br />
              <br />
              Through our online intelligent matching system, we provide precise matching services between enterprise clients and freelancers, along with standardized management tools and workflows.
              <br />
              <br />
              Our business spans multiple vertical sectors, including gaming and esports, online education, home appliance repair, and content e-commerce.
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
            <Image
              src="/images/investor-financials.webp"
              alt="Business Description"
              width={1000}
              height={700}
              className="w-full h-auto"
            />
          </Grid>
          <Grid size={6}>
            <Typography variant="h6" gutterBottom>
              Download financial data
            </Typography>
            <Divider />
            <Typography variant="subtitle2" gutterBottom>
              To request our financial information, please contact us via email:
              ir@biyainc.com
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
