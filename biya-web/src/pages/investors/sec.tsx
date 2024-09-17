import IrPageBanner from "../../components/banner/irPageBanner";
import QMod from "@/components/QMod";
import QModFooter from "@/components/QModFooter";

export default function Newsroom() {
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
    <div className="container pt-[60px]">
      <IrPageBanner
        title="SEC Filings"
      />
      <div >
        <QMod tool="filings" params={JSON.stringify(params)} datatracked />
      </div>
      <div className="bg-local flex flex-col w-full items-center">
        <div>
          <QModFooter />
        </div>
      </div>
    </div>
  );
}
