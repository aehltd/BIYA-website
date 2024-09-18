import IrPageBanner from "../../components/banner/irPageBanner";
import Typography from "@mui/material/Typography";

export default function Ir() {
  return (
    <div className="container pt-[60px]">
      <IrPageBanner title="IR Contact" />
      <Typography variant="body1">
        Investor inquiries should be directed towards our investor relations
        representative:
      </Typography>
      <div>
        <Typography variant="h5" className = "tracking-wide">IR Name</Typography>
        <Typography variant="h6">Phone:</Typography>
        <Typography variant="h6">(000)-000-000</Typography>
        <Typography variant="h6">Email:</Typography>
        <Typography variant="h6">xxx@email.com</Typography>
      </div>
    </div>
  );
}
