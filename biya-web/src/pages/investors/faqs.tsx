import IrPageBanner from "../../components/banner/irPageBanner";
import ComingSoon from "@/components/upComing";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: FAQItem[] = [
  {
    question: "What is Baiya's business?",
    answer: "Baiya's business focuses on providing flexible employment solutions in China through its Gongwuyuan Platform, offering job matching, recruitment, labor dispatching, and SaaS-enabled HR services for blue-collar workers.",
  },
  {
    question: "What are Baiya's ticker symbol, exchange, and CUSIP?",
    answer: "Baiya’s ordinary shares are traded on the NASDAQ Capital Market under the symbol 'BIYA.' The CUSIP number is G07064101 for the ordinary shares.",
  },
  {
    question: "When was Baiya founded?",
    answer: "Baiya International Group Co., Ltd. ('Baiya') was incorporated on October 18, 2021, under the laws of the Cayman Islands. Its operating subsidiary, Gongwuyuan, was founded in China on October 23, 2017, and began providing employment matching services the same year.",
  },
  {
    question: "How many of the Company's shares are outstanding?",
    answer: "As of December 31, 2024, there were approximately 12.5 million ordinary shares outstanding (12.875 million ordinary shares if the underwriters exercise their over-allotment option in full). Our ordinary shares are trading on the NASDAQ Capital Market.",
  },
  {
    question: "When is the next earnings release?",
    answer: "As a foreign private issuer, Baiya's first half earnings reports are scheduled to be released approximately twelve weeks following the first half of its fiscal year (June 30) and its second half and full year earnings reports are scheduled to be released approximately sixteen weeks following its fiscal year-end (December 31). All earnings releases are posted on our website.",
  },
  {
    question: "How can I get on an email list to receive all press releases?",
    answer: "To automatically receive email alerts for the information categories that interest you, please click on Email Alerts.",
  },
  {
    question: "Who is Baiya's independent Certified Public Accountant?",
    answer: "Kreit & Chiu CPA LLP is Baiya’s independent auditor.",
  },
  {
    question: "Who is Baiya's investor relations firm?",
    answer: "Ascent Investor Relations Inc (AIR), 733 3rd Avenue, 16th Floor, New York, NY 10017. To contact email info@ascent-ir.com.",
  },
  {
    question: "Who is Baiya's transfer agent?",
    answer: "Transhare Corporation, Bayside Center, 17755 US Highway 19 N Suite 140, Clearwater, FL, 33764. To contact, call (303) 662-1112 or email info@transhare.com.",
  },
  {
    question: "Who is Baiya’s legal counsel?",
    answer: "Lewis Brisbois Bisgaard & Smith LLP, 45 Fremont Street, Suite 3000 San Francisco, CA 94105.",
  },
];


export default function FAQs() {
  return (
    <div className="container pt-[60px] pb-5">
      <IrPageBanner title="FAQs" />
      <div className=" py-5">
        <ul className="flex flex-col space-y-8">
          {FAQ.map((item, index) => (
            <li key={index} className="flex flex-col">
              <h2 className="tracking-wide font-bold py-2 text-2xl">
                {index + 1}. {item.question}
              </h2>
              <p>{item.answer}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
