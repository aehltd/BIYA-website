import IrPageBanner from "../../components/banner/irPageBanner";
import QMod from "@/components/QMod";
import QModFooter from "@/components/QModFooter";

import ComingSoon from "@/components/upComing";

export default function SEC() {
  const params = {
    lang: "en",
    socialshare: true,
    resultsPerPage: 10,
    excludeTopics: "NONCOMPANY",
    src: "qmr",
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
    symbol: "AEHL",
  };

  return (
    <div id="container" className="container pt-[60px]">
      <IrPageBanner title="SEC Filings" />
      {/* <div className="row">
        <QMod tool="filings" params={JSON.stringify(params)} datatracked />
      </div>
      <div className="bg-local flex flex-col w-full items-center">
        <div className="row">
          <QModFooter />
        </div>
      </div> */}
      <ComingSoon/>
    </div>
  );
}
