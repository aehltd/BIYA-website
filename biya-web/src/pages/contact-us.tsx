// import Link from "next/link";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";

import ContactUsPageBanner from "../components/banner/contactUsPageBanner"

export default function NotFound() {
  return (
    <>
    <ContactUsPageBanner/>
    <div className="container py-8">
      <Grid container spacing={3}>
        <Grid size={12}>
          <Typography variant="h3">Contact Us</Typography>
        </Grid>
        <Grid size={6}>
          <Box>
            <Typography variant="h5" className = "py-2">
              Baiya International Group Inc. (USA)
            </Typography>
            <Typography variant="h6">Address:</Typography>

            <Typography variant="body1">
              1460 Broadway New York, NY 10036 USA
            </Typography>
            <br />
            <Typography variant="h6" >Phone:</Typography>
            <Typography variant="body1">+86 0769-88785888</Typography>
            <br />
            <Typography variant="h6">Email:</Typography>
            <Typography variant="body1">weilaizhang@baiyainc.com</Typography>
            <br />
          </Box>
        </Grid>
        <Grid size={6}>
          <Typography variant="h5" className = "py-2">
            Baiya International Group Inc. (China)
          </Typography>
          <Typography variant="h6">Address:</Typography>
          <Typography variant="body1">
            Yifang Capital Industrial Park No.33 Pingshan Industrial Road,
            Building A, 16F Tangxia, Dongguan, Guangdong, China
          </Typography>
          <br />
          <Typography variant="h6">Phone:</Typography>
          <Typography variant="body1">+86 0769-88785888</Typography>
          <br />
          <Typography variant="h6">Email:</Typography>
          <Typography variant="body1">info@biyainc.com</Typography>
          <br />
        </Grid>
      </Grid>
    </div>
    </>
  );
}
