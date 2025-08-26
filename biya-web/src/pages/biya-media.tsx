import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import BiyaMediaBanner from "../components/banner/biyaMediaBanner";

export default function BiyaMediaPage() {
  return (
    <>
      <BiyaMediaBanner />

      <div className="container py-8">
        <Grid container spacing={3}>
          <Grid size={12}>
            <Typography variant="h4" className="font-bold">
              About Our Company
            </Typography>
            <Typography variant="body1" className="py-2">
              We are BIYA Universal Media Inc., a subsidiary of the U.S.-listed
              company Baiya International Group Inc.
            </Typography>
            <Typography variant="body1" className="py-2">
              We specialize in operating REDnote (Xiaohongshu) accounts and
              helping both talents and U.S. brands grow in the Chinese-speaking
              market — especially among Chinese communities in the U.S. and in
              China.
            </Typography>
            <Typography variant="h5" className="py-2 font-semibold">
              Our strengths:
            </Typography>
            <ul className="list-disc pl-5">
              <li>
                <Typography variant="body1">
                  Based in New York and China, seamlessly connecting both
                  markets
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  A bilingual team with deep expertise in talent marketing and
                  Chinese social platforms
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Trusted by brands, platforms, and talents across China and the
                  U.S.
                </Typography>
              </li>
            </ul>

            {/* Learn More Button */}
            <Box className="pt-4">
              <Button
                variant="contained"
                color="primary"
                href="https://www.biyauniversalmedia.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
