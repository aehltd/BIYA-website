import IrPageBanner from "../../components/banner/irPageBanner";
import QModFooter from "@/components/QModFooter";
import QMod from "@/components/QMod";

import ComingSoon from "@/components/upComing";

export default function Stock() {
  const detailedQuoteTabChartParams = {
    symbol: "AEHL",
    lang: "en",
    chcon: "off",
    chfrmon: "off",
    chton: "off",
    chdon: "off",
    chbgch: "ffffff",
    chbg: "ffffff",
    chgrd: "0a6283",
    chbdr: "0a6283",
    chxyc: "0a6283",
    chln: "0a6283",
    chfill: "0a6283",
    chfill2: "0a6283",
    chscale: "3m",
    chtype: "Mountain",
    chlowwh: 10,
    chfnts: 14,
    svg: true,
    showLogo: false,
    lowHigh: false,
  };

  return (
    <div className="container pt-[60px]">
      <IrPageBanner title="Stock" />
      <div className="">
        <QMod tool="detailedquotetabchart" params={JSON.stringify(detailedQuoteTabChartParams)} datatracked />
      </div>
      <div className="bg-local flex flex-col w-full items-center">
        <div className="row">
          <QModFooter />
        </div>
      </div>
      <ComingSoon />
    </div>
  );
}
