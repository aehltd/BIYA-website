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
    name: "Siyu Yang",
    position: "Chief Executive Officer and Chairman",
    description: `- Ms. Yang has been our Chief Executive Officer since October 2021 and Chairman since July 11, 2025.
    - Ms. Yang has extensive knowledge in the investment field, as well as a solid foundation of business practice experience and professional skills. 
    - Ms. Yang, as the founder of Sichuan Xinhaisheng Labor Service Co., Ltd., served as that company’s Chief Executive Officer responsible for the strategy and project management of business output.
    - Ms. Yang also served as a senior executive of a cultural communication company and was responsible for the national vocational education promotion and former vocational skills retraining. 
    `,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250852/Siyu_Yang_zqfwni.png",
    linkedin: "",
  },
  {
    name: "Huashu Yuan",
    position:
      "Chair of Nominating and Corporate Governance Committee, Director",
    description: `- Ms. Yuan has served as our Independent Director since March 2025.
      - Ms. Yuan has extensive professional knowledge in the media field, as well as a solid foundation of business practice experience and professional skills.
      - Ms. Yuan, as the social media specialist, worked for WG Empire in New York.
      - Ms. Yuan received a Bachelor’s Degree in Communication and Rhetoric Studies at University of Wisconsin-Madison, and a Master Degree of Emerging Media Studies at Boston University.
      `,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250853/Huashu_Yuan_roqma7.png",
    linkedin: "",
  },
  {
    name: "Yankun Wang",
    position: "Chair of Audit Committee, Director",
    description: `- Ms. Wang is a senior HR and administration professional with over a decade of experience in human resources management, organizational development, and corporate administration. 
    - From March 2023 to present, she worked as HR and Administration Manager at Jinke Yulv Technology Co., Ltd., where she focused on HR strategy and planning, talent supply chain development, and organizational effectiveness improvement. 
    - From March 2019 to March 2023, she served as Deputy Director of Administration at Sichuan Jiaotou Tianfu Real Estate Co., Ltd., a subsidiary of Sichuan Jiaotou, one of China’s leading state-owned enterprises. 
    - Ms. Wang holds a nationally accredited Economics Professional Qualification. She earned her bachelor’s degree in marketing from Sichuan Normal University.
  `,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1754591221/Wang_Yankun_k27nex.png",
    linkedin: "",
  },
  {
    name: "Linxi Xie",
    position: "Chair of Compensation Committee, Director",
    description: `- Ms. Xie has over ten years of experience in the financial industry, focusing on overseas IPOs and cross-border capital markets. 
    - Since May 2020, she has been serving as a Partner at Antelope Holdings (Chengdu) Co., Ltd., where she has led multiple overseas IPO projects and advised on listing strategy, M&A planning, and financing. 
    - Ms. Xie holds a degree in Business Administration (Online Education Program) from the University of Electronic Science and Technology of China. 
    - She holds a Fund Practitioner Qualification Certificate and is a Certified Financial Planner (CFP).
    `,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1751294330/2_ql2dzs.png",
    linkedin: "",
  },
  {
    name: "Luting Zhang",
    position: "Director",
    description: `- Ms. Zhang is a seasoned legal professional with extensive experience in capital markets and commercial law.
    - She served at the Chenghua District People's Court, handling over 200 enforcement cases and pioneering innovative legal practices in asset tracing, legal drafting, and client negotiations.
    - In private practice, she has managed a wide range of civil and commercial disputes, including contracts, equity, and construction, and has played a key role in case strategy and settlement agreements.
    - Ms. Zhang holds a Class A Legal Professional Qualification Certificate and a Bachelor of Laws from Fuzhou University of International Business and Economics. Her combined experience in both the judicial system and private litigation underscores her strong understanding of procedural law and dispute resolution.
    `,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1754590254/luting_zheng_hc2qqo.jpg",
    linkedin: "", // Add LinkedIn URL if available
  },
  // {
  //   name: "Xiaoyue Zhang",
  //   position: "Chair of Compensation Committee, Director",
  //   description: `- Ms. Zhang has served as our Independent Director since March 2025.
  //   - Ms. Zhang has been an investment manager with Antelope Enterprise Holdings Ltd. since May 2021.
  //   - Ms. Zhang served as a securities affairs representative with Hiseas International Tourism Group from 2019 to 2021.
  //   - Ms. Zhang was previously an auditor with BDO China Shu Lun Pan Certified Public Accountants LLP from 2018 to 2019.
  //   - Ms. Zhang received a Bachelor of Accounting from University of Adelaide.
  //   `,
  //   image:
  //     "https://res.cloudinary.com/aehl/image/upload/v1726250852/Xiaoyue_Zhang_zmrhke.png",
  //   linkedin: "",
  // },
];

export default function About() {
  return (
    <div>
      <Grid container spacing={3}>
        {board.map((entry, index) => {
          return (
            <Grid key={index} size={{ md: 6, xs: 12 }}>
              <Card sx={{ height: { md: 500 } }}>
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
                  <Typography
                    variant="body2"
                    className="py-1 whitespace-pre-line leading-relaxed"
                  >
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
