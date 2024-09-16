// components/SubNavBar.tsx
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const investorSubItems = [
  { name: "Newsroom", path: "/investors/newsroom" },
  { name: "SEC Filings", path: "/investors/sec" },
  { name: "Stock Price", path: "/investors/stock" },
  { name: "Corporate Governance", path: "/investors/corporate" },
  { name: "FAQs", path: "/investors/faqs" },
  { name: "IR Contact", path: "/investors/ir" },
];

const IrNavBar = () => {
  const router = useRouter();

  // Check if the current path starts with "/investors"
  const isInvestorsPage = router.pathname.startsWith("/investors");

  if (!isInvestorsPage) return null; // Don't render if not on /investors

  return (
    <Box className="bg-biya-gray justify-between px-10" sx={{ display: "flex" }}>
      <Typography className="text-black font-bold flex text-center" variant="h5">
        Investor Relations
      </Typography>
      <div className="md:flex hidden">
        {investorSubItems.map((subItem) => (
          <Link href={subItem.path} passHref key={subItem.name} legacyBehavior>
            <Button sx={{ color: "black", mx: 2 }}>{subItem.name}</Button>
          </Link>
        ))}
      </div>
    </Box>
  );
};
export default IrNavBar;
