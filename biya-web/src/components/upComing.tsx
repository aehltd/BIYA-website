import Link from "next/link";
import { Typography } from "@mui/material";

export default function ComingSoon() {
  return (
    <div id="container" className="container py-5">
      <div>
        <Typography variant="h4" className = "tracking-wider">Coming Soon</Typography>
        <Typography variant="h5">
          This feature is currently in development. We're working hard to bring
          it to you soon. Stay tuned for updates!
        </Typography>
      </div>
    </div>
  );
}
