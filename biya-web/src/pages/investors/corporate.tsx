import IrPageBanner from "../../components/banner/irPageBanner";
import Board from "../../components/investors/Board";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Image from "next/image";

export default function Corporate() {
  return (
    <div className="container pt-[60px]">
      <IrPageBanner title="Corporate" />
      <Typography>Board of Directors</Typography>
      <div className="py-5">
        <Board />
      </div>
      <Divider />
      <div className="py-3">
        <Image
          src="https://res.cloudinary.com/aehl/image/upload/v1726250854/table_r5jtij.png"
          width={700}
          height={500}
          alt="Table of Board of Directors"
        />
      </div>
    </div>
  );
}
