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
                Room 18022, Floor 18, 112 W. 34th Street, New York, NY 10120
              </Typography>
              <br />
              <Typography variant="h6">Phone:</Typography>
              <Typography variant="body1">+1 (838)-900-8888</Typography>
              <br />
              <Typography variant="h6">Email:</Typography>
              <Typography variant="body1">siyuyang@biyainc.com</Typography>
              <br />
            </Box>
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
