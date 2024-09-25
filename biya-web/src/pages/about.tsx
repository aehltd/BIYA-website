import Head from "next/head";
import Image from "next/image";

import AboutPageBanner from "../components/banner/aboutPageBanner";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | BIYA</title>
        <meta
          name="description"
          content="Learn more about BIYA, our mission, vision, and values."
        />
      </Head>

      <AboutPageBanner />

      <div className="container py-8">
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography
              className="text-black font-bold tracking-widest py-4"
              variant="h4"
              component="h4"
            >
              Job matching service
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="body1" gutterBottom>
              Under job matching service model, the Company connects the
              Employing Companies and the HR Service Companies based on the
              quantity and the duration of the blue-collar labor the Employing
              Company plans to recruit. Once the contract between the Employing
              Companies and HR Service Companies were signed, the Company
              charges the service fee to the Employing Company by the quantity
              of labor recruited at the pre-determined rate per capita per month
              designated in the contract between the Company and the Employing
              Companies. The Company considers that the customers simultaneously
              receive and consume the benefit in the service period designated
              by the contract term and therefore recognizes the revenue over
              time since blue-collar labor starts to work for the Employing
              Companies.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1726244508/image1_wapdy2.png"
              alt="Business Description"
            ></img>
          </Grid>
          <Grid size={12}>
            <Typography
              className="text-black font-bold tracking-widest py-4"
              variant="h4"
              component="h4"
            >
              Entrusted recruitment service
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1726244508/image2_x7c3hv.png"
              alt="Business Description"
            ></img>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="body1" gutterBottom>
              Under entrusted recruitment service model, the Employing Companies
              and HR Service Companies are both confidential to each other, the
              Employing Companies select the labor candidates provided by us
              (and directly with the HR Service Companies, and HR Service
              Companies are not allowed to contact the Employing Companies). The
              Employing Companies directly submit recruitment requests to the
              Company for their recruitment needs, which typically include the
              number of blue-collar workers needed, work hours, the preferred
              and required skill sets, etc. (the “Overall Work Arrangement”).
              Once the overall work arrangement is established, the Company
              confirms the information regarding employment needs of the
              Employing Company. Subsequently, the Company negotiates with the
              labor service company to organize blue-collar workers. The labor
              service companies provide information of the workers and registers
              basic personal information of the workers for the Company. During
              the execution of the contract between the Company and the
              Employing Companies, the Company regularly communicates with the
              Employing Company to resolve issues and collect feedback on the
              performance of the blue-collar workers. The Company is responsible
              for briefing the workers for the Employing Companies’ culture,
              rules and regulations, worker’s job responsibilities, code of
              conduct, and provides short term vocation training if needed. The
              Company considers that the customers simultaneously receive and
              consume the benefit in the service period designated by the
              contract term and the Company recognizes the revenue over time
              since such blue-collar labor started to work for the Employing
              Companies.
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography
              className="text-black font-bold tracking-widest py-4"
              variant="h4"
              component="h4"
            >
              Labor dispatching service
            </Typography>
          </Grid>
          <Grid size={12}>
            <Typography variant="body1" gutterBottom>
              Under labor dispatching service model, the Customers submit their
              labor needs and the Company dispatches its employees directly to
              the Customers. The Company is responsible for the payment of wages
              to the dispatched workers, and charges service fee to the
              Customers based upon the total number of working hours of the
              dispatched employees of the Company. The Company considers that
              the Customers simultaneously receive and consume the benefit as
              well as the dispatch services. The Company controls the specified
              service before that service is performed for a customer. Due to
              the negative gross profit of labor dispatching service, we
              determined not to expand this business line but strategically
              reduce the labor dispatching service. As of June 30, 2023,
              Gongwuyuan has cooperated and partnered with 15 corporate clients,
              including 7 agency recruitment clients, 8 outsourcing business
              clients, in core manufacturing regions such as the Pearl River
              Delta and Yangtze River Delta regions. As of June 30, 2023, there
              are over 4,992 labor companies and 3,142 enterprises registered on
              the Gongwuyuan Platform. Gongwuyuan believes that it will be able
              to convert 10% of such potential customers in the future, which
              will increase the number of clients that it cooperates and
              partners with by over 700.
            </Typography>
            <Divider className = "py-3"/>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Typography variant="h4" component="h4">
              Corporation Structure
            </Typography>
          </Grid>
          <Grid size={{ md: 4, xs: 12 }}>
            <Box sx={{ borderRadius: 1 }}>
              <a
                href="https://res.cloudinary.com/aehl/image/upload/v1727280052/Corporation_Structure_q6czip.png"
                target={"_blank"}
              >
                <Image
                  src="https://res.cloudinary.com/aehl/image/upload/v1727280052/Corporation_Structure_q6czip.png"
                  alt="Corporation Structure"
                  layout="responsive"
                  width={800}
                  height={800}
                />
              </a>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
