import Link from "next/link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid2";

export default function Footer() {
  return (
    <div>
      <footer className=" bg-biya-gray py-8">
        <div className="container">
          <Grid container spacing={3} className="flex items-center">
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" className="font-bold flex">
                Baiya International Group Inc.
              </Typography>
            </Grid>
            {/* Small Gird */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Grid container spacing={3} className="flex">
                <Grid size={{ xs: 6, md: 3 }}>
                  <Link href="/" passHref>
                    <Typography className="hover:text-biya-blue">
                      Home
                    </Typography>
                  </Link>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Link href="/about" passHref>
                    <Typography className="hover:text-biya-blue">
                      About Us
                    </Typography>
                  </Link>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Link href="/investors-overview" passHref>
                    <Typography className="hover:text-biya-blue">
                      Investors
                    </Typography>
                  </Link>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Link href="/contact-us" passHref>
                    <Typography className="hover:text-biya-blue">
                      Contact
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            {/* Contact Info */}
            <Grid size={{ xs: 12, md: 4 }}>
              <div>
                <Typography className="font-bold">Contact Us:</Typography>
                <Typography>Suite 7540</Typography>
                <Typography>
                  The Empire State Building, 350 Fifth Ave
                </Typography>
                <Typography>New York, NY, 10118 USA</Typography>
              </div>
            </Grid>
          </Grid>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BIYA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
