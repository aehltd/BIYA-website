// import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

import ContactUsPageBanner from "../components/banner/contactUsPageBanner";
import ContactUsForm from "@/components/forms/contactUsForm";

export default function NotFound() {
  return (
    <>
      <ContactUsPageBanner />
      <div className="container py-8">
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography variant="h4" className="font-bold">
              Contact Info
            </Typography>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <Box>
              <Typography variant="h5" className="py-2 font-semibold">
                Baiya International Group Inc. (USA)
              </Typography>
              <Typography variant="h6">Address:</Typography>

              <Typography variant="body1">
                1460 Broadway New York, NY 10036 USA
              </Typography>
              <br />
              <Typography variant="h6">Phone:</Typography>
              <Typography variant="body1">+86 0769-88785888</Typography>
              <br />
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1">weilaizhang@baiyainc.com</Typography>
              <br />
            </Box>
            {/* </Grid> */}
            {/* <Grid size={6}> */}
            <Box>
              <Typography variant="h5" className="py-2 font-semibold">
                Baiya International Group Inc. (China)
              </Typography>
              <Typography variant="h6">Address:</Typography>
              <Typography variant="body1">
                5Q, No. 5 Golf Avenue Guangpei Community, Guanlan Street Longhua
                District, Shenzhen, China
              </Typography>
              <br />
              <Typography variant="h6">Phone:</Typography>
              <Typography variant="body1">+86 0769-88785888</Typography>
              <br />
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1">info@biyainc.com</Typography>
              <br />
            </Box>
          </Grid>
          <Grid size={{xs: 12, md: 6}}>
            <ContactUsForm />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
