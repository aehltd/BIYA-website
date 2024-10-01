import IrPageBanner from "../../components/banner/irPageBanner";
import QModFooter from "@/components/QModFooter";

import ComingSoon from "@/components/upComing";

export default function Stock() {
  return (
    <div className="container pt-[60px]">
      <IrPageBanner title="Stock" />
      <div className="bg-local flex flex-col w-full items-center">
        <div className="row">
          <QModFooter />
        </div>
      </div>
      <ComingSoon />
    </div>
  );
}
