import Link from "next/link";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <div>
      <footer className=" bg-biya-gray py-8">
        <div className="container mx-auto flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          {/* Logo / Brand Name */}

          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction={{ sm: "column", md: "row" }}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
            className="items-center"
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">
                Baiya International Group Inc.
              </h2>
            </div>
            <div className="flex space-x-4">
              <Link href="/" passHref>
                <Typography className="hover:text-biya-blue">Home</Typography>
              </Link>
              <Link href="/about" passHref>
                <Typography className="hover:text-biya-blue">
                  About Us
                </Typography>
              </Link>
              <Link href="/investors-overview" passHref>
                <Typography className="hover:text-biya-blue">
                  Investors
                </Typography>
              </Link>
              <Link href="/contact-us" passHref>
                <Typography className="hover:text-biya-blue">
                  Contact
                </Typography>
              </Link>
            </div>

            <div className="text-left px-3">
              <Typography className="font-bold">Contact Us:</Typography>
              <Typography>Suite 7540</Typography>
              <Typography>The Empire State Building, 350 Fifth Ave</Typography>
              <Typography>New York, NY, 10118 USA</Typography>
            </div>
          </Stack>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BIYA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
