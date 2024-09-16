import IrPageBanner from "../../components/banner/irPageBanner";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function Newsroom() {
  return (
    <div className="container pt-[60px]">
      <IrPageBanner title="Newsroom" />
      <div>
        <Typography
          className="font-semibold tracking-wider"
          variant="h5"
          component="h1"
          gutterBottom
        >
          Press Releases
        </Typography>
        <Divider />
        <div>
          <Typography
            className="tracking-wider"
            variant="h5"
            component="h1"
            gutterBottom
          >
            "Press Releases"
          </Typography>
          <br />
        </div>
      </div>

      <div>
        <Typography
          className="font-semibold tracking-wider"
          variant="h5"
          component="h1"
          gutterBottom
        >
          Events and Presentations
        </Typography>
        <Divider />
        <div>
          <Typography
            className="tracking-wider"
            variant="h5"
            component="h1"
            gutterBottom
          >
            Upcoming Events
          </Typography>
          <Typography
            className="tracking-wider"
            variant="subtitle1"
            component="h1"
            gutterBottom
          >
            No events scheduled.
          </Typography>
        </div>
        <div>
          <Typography
            className="tracking-wider"
            variant="h5"
            component="h1"
            gutterBottom
          >
            Past Events
          </Typography>
          <Typography
            className="tracking-wider"
            variant="subtitle1"
            component="h1"
            gutterBottom
          >
            No events.
          </Typography>
        </div>
      </div>
    </div>
  );
}
