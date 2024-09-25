import IrPageBanner from "../../components/banner/irPageBanner";
import Typography from "@mui/material/Typography";

export default function Ir() {
  return (
    <div className="container pt-[60px]">
      <IrPageBanner title="IR Contact" />
      <Typography variant="body1" className="py-3">
        Investor inquiries should be directed towards our investor relations
        representative:
      </Typography>
      <div>
        <Typography variant="h4" className="tracking-wide">
          Tina Xiao
        </Typography>
        <Typography variant="body1" className="py-0">
          Ascent Investor Relations LLC
        </Typography>
        <Typography variant="h6">Phone:</Typography>
        <Typography variant="h6">+1 (917)-609-0333</Typography>
        <Typography variant="h6">Email:</Typography>
        <Typography variant="h6">tina.xiao@ascent-ir.com</Typography>
      </div>
    </div>
  );
}
