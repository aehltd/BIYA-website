import IrPageBanner from "../../components/banner/irPageBanner";
import ComingSoon from "@/components/upComing";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: FAQItem[] = [
  // {
  //   question: "Q1?",
  //   answer:"A1",
  // },
];

export default function FAQs() {
  return (
    <div className="container pt-[60px] pb-5">
      <IrPageBanner title="FAQs" />
      <div>
        <ul className="flex flex-col space-y-8">
          {FAQ.map((item, index) => (
            <li key={index} className="flex flex-col">
              <h2 className="tracking-wide font-bold py-4">
                {index + 1}. {item.question}
              </h2>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
      <ComingSoon/>
    </div>
  );
}
