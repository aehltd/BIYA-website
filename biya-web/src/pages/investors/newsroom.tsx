import IrPageBanner from "../../components/banner/irPageBanner";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ComingSoon from "@/components/upComing";

import QModFooter from "@/components/QModFooter";

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
        <ComingSoon/>
        {/* <div>
          <Typography
            className="tracking-wider"
            variant="h5"
            component="h1"
            gutterBottom
          >
            <div data-qmod-tool="filings" data-qmod-params='{ "symbol" : "GOOGL" }' className="qtool"></div>
          </Typography>
          <div className="bg-local flex flex-col w-full items-center">
            <div className="">
              <QModFooter />
            </div>
          </div>
          <br />
        </div> */}
      </div>

      <div className="pt-8">
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
        <div className="py-5">
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
