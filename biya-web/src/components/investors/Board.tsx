import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

type BoardEntry = {
  name: string;
  position: string;
  description: string;
  image: string;
  linkedin: string;
};

const board: BoardEntry[] = [
  {
    name: "Weilai Zhang",
    position: "Director & Chairman",
    description:
      "Mr. Zhang has been our director since August 2022 and will be appointed as the Chairman of our Board upon the effectiveness of this prospectus. Mr. Zhang is responsible for our overall strategic planning. He has extensive experience in business management and marketing, has incubated a series of fast-growing financial technology companies, and successfully invested in many start-up companies.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250854/Weilai_Zhang_ltfocj.png",
    linkedin: "https://www.linkedin.com/in/aehl/",
  },
  {
    name: "Siyu Yang",
    position: "CEO",
    description:
      "Ms. Yang has been our Chief Executive Officer and director since October 2021 and is responsible for our overall strategic development. Ms. Yang has extensive knowledge in the investment field, as well as a solid foundation of business practice experience and professional skills. Before joining the Company, Ms. Yang, as the founder of Sichuan Xinhaisheng Labor Service Co., Ltd., served as that company’s Chief Executive Officer responsible for the strategy and project management of business output. She also served as a senior executive of a cultural communication company and was responsible for the national vocational education promotion and former vocational skills retraining. In addition, Ms. Yang has held key senior management positions throughout the company.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250852/Siyu_Yang_zqfwni.png",
    linkedin: "",
  },
  {
    name: "Bin Tan",
    position: "COO",
    description:
      "Mr. Tan has served as our Chief Operating Officer since October 2021 and is responsible for the overall operation of our Internet platform. At the same time, Mr. Tan is also the vice president of our holding subsidiary Shenzhen Gongwuyuan Network Technology Co., Ltd. Before joining our company, Mr. Tan served as the general manager of the business unit in Shenzhen Diexun Technology Co., Ltd. from 2015 to 2018. Before that, Mr. Tan served as the general manager of the business department in Shenzhen Huanan Chengwang E-Commerce Co., Ltd. from 2012 to 2015. From 2007 to 2012, Mr. Tan served as the Director of Product Operations in Shenzhen Penghaiyun Electronic Data Interchange Co., Ltd.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250853/Bin_Tan_rlblvw.png",
    linkedin: "",
  },
  {
    name: "Dian Zhang",
    position: "CFO",
    description:
      "Mr. Zhang has served as our Chief Financial Officer since June 2022. Before joining our company, Mr. Zhang worked as a headquarter analyst at Eaton Square M&A Advisory Firm in Australia from 2014 to 2020. Before that period, Mr. Zhang worked as an auditor at ShineWing Certified Public Accountants from 2009 to 2013. Mr. Zhang holds a Bachelor Degree of Management Accounting from Aston University, a Master Degree of Banking and Finance from Monash University, and a Master Degree of Financial Management from the Australian National University. In addition, Mr. Zhang is a fellow member of the Association of Chartered Certified Accountants in the United Kingdom.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250851/Dian_Zhang_btf9ui.png",
    linkedin: "",
  },
  {
    name: "Huashu Yuan",
    position: "Director",
    description:
      "Ms. Yuan will join the Company upon the effectiveness of this prospectus as an independent director. Ms. Yuan has extensive professional knowledge in the media field, as well as a solid foundation of business practice experience and professional skills. Before joining as a director, Ms. Yuan, as the social media specialist, worked for WG Empire in New York. Ms. Yuan received a Bachelor’s Degree in Communication and Rhetoric Studies at University of Wisconsin-Madison, and a Master Degree of Emerging Media Studies at Boston University.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250853/Huashu_Yuan_roqma7.png",
    linkedin: "",
  },
  {
    name: "Zicen Liao",
    position: "Director",
    description:
      "Ms. Liao will join the Company upon the effectiveness of this prospectus as an independent director. Ms. Liao is a professional investment manager with over 5 years of experience in conducting industry, market and company-specific research and financial due diligence, with a focus on start-up and growth companies. Ms. Liao is currently an investment manager in the M&A Department of Antelope Enterprise Holdings Limited (NASDAQ: AEHL) since 2021. Ms. Liao was previously a project manager in Transaction Advisory Services at Grant Thornton Advisory (Beijing Office, China) from 2016 to 2020, with over 3.5 years of experience in conducting financial due diligence. Ms. Liao holds two Bachelor degrees in Mathematics and Finance from Indiana University Bloomington, Indiana State, USA.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250850/Zicen_Liao_lev4zy.png",
    linkedin: "",
  },
  {
    name: "Siyu Yang",
    position: "Director",
    description:
      "Ms. Zhang will join the Company upon the effectiveness of this prospectus as an independent director. Ms. Zhang has been an investment manager with Antelope Enterprise Holdings Ltd. since May 2021. Prior to that, Ms. Zhang served as a securities affairs representative with Hiseas International Tourism Group from 2019 to 2021. Ms. Zhang was previously an auditor with BDO China Shu Lun Pan Certified Public Accountants LLP from 2018 to 2019. Ms. Zhang received a Bachelor of Accounting from University of Adelaide.",
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250852/Xiaoyue_Zhang_zmrhke.png",
    linkedin: "",
  },
];

export default function About() {
  return (
    <div>
      <Grid container spacing={3}>
        {board.map((entry, index) => {
          return (
            <Grid key={index} size={{ md: 6, xs: 12 }}>
              <Card sx={{ height: { md: 400 } }}>
                <CardContent>
                  <div className="flex items-center">
                    <Avatar
                      alt="img"
                      src={entry.image}
                      sx={{
                        width: 56,
                        height: 56,
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      className="pl-5 font-medium tracking-wide"
                    >
                      {entry.name}
                    </Typography>
                  </div>
                  <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                    className="pt-3"
                  >
                    {entry.position}
                  </Typography>
                  <Typography variant="body2" className="py-1">
                    {entry.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
