import IrPageBanner from "../../components/banner/irPageBanner";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ComingSoon from "@/components/upComing";
import QModFooter from "@/components/QModFooter";
import QMod from "@/components/QMod";

export default function Newsroom() {
  const params = {
    lang: "en",
    socialshare: true,
    resultsPerPage: 10,
    excludeTopics: "NONCOMPANY",
    noSrc: "qmr",
    summLen: 100,
    showLogo: false,
    lowHigh: false,
    videonews: true,
    showVideos: true,
    showSharingButtons: true,
    showThumbnail: false,
    dateHeadings: true,
    yearSelect: false,
    yearSelectNumYears: 2,
    yearSelected: 0,
    datePickerFormat: "Y-m-d",
    symbol: "BIYA",
  };
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
        <div>
          <div>
            <QMod
              tool="fullnewssummary"
              params={JSON.stringify(params)}
              datatracked
            />
          </div>
          <div className="bg-local flex flex-col w-full items-center">
            <div className="">
              <QModFooter />
            </div>
          </div>
          <br />
        </div>
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
