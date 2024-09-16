// components/IRBanner.tsx
import React from "react";
import { Typography } from "@mui/material";

interface IRBannerProps {
  title: string;
}

const IRBanner: React.FC<IRBannerProps> = ({
  title,
}) => {
  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     bgcolor: "primary.main",
    //     color: "white",
    //     p: 4,
    //     borderRadius: 2,
    //     textAlign: "center",
    //     maxWidth: "100%",
    //     mx: "auto",
    //   }}
    // >
    //   <Typography variant="h3" component="h1" gutterBottom>
    //     {title}
    //   </Typography>
    //   <Typography variant="h6" component="p" gutterBottom>
    //     {subtitle}
    //   </Typography>
    //   <Link href={ctaLink} passHref>
    //     <Button variant="contained" color="secondary">
    //       {ctaText}
    //     </Button>
    //   </Link>
    // </Box>

    <div>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
    </div>
  );
};

export default IRBanner;
