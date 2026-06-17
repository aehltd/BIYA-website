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
    name: "Linxi Xie",
    position: "Chairman and Chief Executive Officer",
    description: `- Ms. Xie has served as our Chief Executive Officer and Chairman of the Board since June 2026.
    - Ms. Xie has over ten years of experience in the financial industry, focusing on overseas IPOs and cross-border capital markets.
    - Ms. Xie has been serving as a Partner at Antelope Holdings (Chengdu) Co., Ltd. since May 2020.
    - Ms. Xie worked as Head of the Asset Management Department at Sichuan Xinglian'an Asset Management Co., Ltd. from March 2013 to September 2016.
    - Ms. Xie holds a degree in Business Administration (Online Education Program) from the University of Electronic Science and Technology of China.
    `,
    image: "/images/board-linxi-xie.webp",
    linkedin: "",
  },
  {
    name: "Huashu Yuan",
    position:
      "Chair of Nominating and Corporate Governance Committee, Director",
    description: `- Ms. Yuan has served as our Independent Director since March 2025.
      - Ms. Yuan has extensive professional knowledge in the media field, as well as a solid foundation of business practice experience and professional skills.
      - Ms. Yuan, as the social media specialist, worked for WG Empire in New York.
      - Ms. Yuan received a Bachelor's Degree in Communication and Rhetoric Studies at University of Wisconsin-Madison, and a Master Degree of Emerging Media Studies at Boston University.
      `,
    image: "/images/board-huashu-yuan.webp",
    linkedin: "",
  },
  {
    name: "Yankun Wang",
    position: "Chair of Audit Committee, Director",
    description: `- Ms. Wang is a senior HR and administration professional with over a decade of experience in human resources management, organizational development, and corporate administration. 
    - From March 2023 to present, she worked as HR and Administration Manager at Jinke Yulv Technology Co., Ltd., where she focused on HR strategy and planning, talent supply chain development, and organizational effectiveness improvement. 
    - From March 2019 to March 2023, she served as Deputy Director of Administration at Sichuan Jiaotou Tianfu Real Estate Co., Ltd., a subsidiary of Sichuan Jiaotou, one of China's leading state-owned enterprises. 
    - Ms. Wang holds a nationally accredited Economics Professional Qualification. She earned her bachelor's degree in marketing from Sichuan Normal University.
  `,
    image: "/images/board-yankun-wang.webp",
    linkedin: "",
  },
  {
    name: "Luting Zhang",
    position: "Director",
    description: `- Ms. Zhang has served as our Director since July 2025.
    - Ms. Zhang is a seasoned legal professional with extensive experience in capital markets and commercial law.
    - She served at the Chenghua District People's Court, handling over 200 enforcement cases and pioneering innovative legal practices in asset tracing, legal drafting, and client negotiations.
    - In private practice, she has managed a wide range of civil and commercial disputes, including contracts, equity, and construction, and has played a key role in case strategy and settlement agreements.
    - Ms. Zhang holds a Class A Legal Professional Qualification Certificate and a Bachelor of Laws from Fuzhou University of International Business and Economics. Her combined experience in both the judicial system and private litigation underscores her strong understanding of procedural law and dispute resolution.
    `,
    image: "/images/board-luting-zhang.webp",
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
