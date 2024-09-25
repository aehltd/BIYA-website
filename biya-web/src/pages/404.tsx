import Link from "next/link";
import { Typography, Button } from "@mui/material";

export default function NotFound() {
  return (
    <div id="container" className="container">
      <div>
        <Typography variant="h1">404</Typography>
        <Typography variant="h4">Page not found</Typography>
        <Button>
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}
