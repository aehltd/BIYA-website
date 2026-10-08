import IrPageBanner from "../../components/banner/irPageBanner";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQ: FAQItem[] = [
  {
    question: "What is Baiya's business?",
    answer: "Baiya operates an intelligent SaaS-enabled new-economy human capital platform focused on the full lifecycle management of freelance talent. Through its online intelligent matching system, Baiya provides precise matching services between enterprise clients and freelancers, along with standardized management tools and workflows.",
  },
  {
    question: "What are Baiya's ticker symbol, exchange, and CUSIP?",
    answer: "Baiya’s ordinary shares are traded on the NASDAQ Capital Market under the symbol 'BIYA.' The CUSIP number is G07064127 for the ordinary shares.",
  },
  {
    question: "When was Baiya founded?",
    answer: "Baiya International Group Co., Ltd. ('Baiya') was incorporated on October 18, 2021, under the laws of the Cayman Islands. Its operating subsidiary, Gongwuyuan, was founded in China on October 23, 2017, and began providing employment matching services the same year.",
  },
  {
    question: "How many of the Company's shares are outstanding?",
    answer: "As of July 13, 2026, the Company had approximately 2.7 million ordinary shares outstanding.",
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
    answer: "Onestop Assurance PAC, 10 Anson Road, #21-14, International Plaza, Singapore 079903. To contact, please call +65 6883 5647.",
  },
  {
    question: "Who is Baiya's investor relations firm?",
    answer: "Ascent Investor Relations LLC, 733 3rd Avenue, 16th Floor, New York, NY 10017. To contact, please call +1-646-932-7242 or email investors@ascent-ir.com.",
  },
  {
    question: "Who is Baiya's transfer agent?",
    answer: "Transhare Corporation, Bayside Center 1., 17755 US Hwy 19 N Suite 140, Clearwater, FL 33764. To contact, call (303) 662-1112 or email info@transhare.com.",
  },
  {
    question: "Who is Baiya’s legal counsel?",
    answer: "Womble Bond Dickinson (US) LLP, 888 7th Ave, 38th Floor, New York, NY 10106. To contact, please call (332) 258-8400.",
  },
  {
    question: "When did the Company become a public company?",
    answer: "March 21, 2025.",
  }
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
