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
    position: "Chief Executive Officer and Director",
    description: `- Ms. Yang has been our Chief Executive Officer and director since October 2021. 
- Ms. Yang has extensive knowledge in the investment field, as well as a solid foundation of business practice experience and professional skills. 
- Ms. Yang, as the founder of Sichuan Xinhaisheng Labor Service Co., Ltd., served as that company’s Chief Executive Officer responsible for the strategy and project management of business output. 
- Ms. Yang also served as a senior executive of a cultural communication company and was responsible for the national vocational education promotion and former vocational skills retraining.`,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250852/Siyu_Yang_zqfwni.png",
    linkedin: "",
  },
//   {
//     name: "Bin Tan",
//     position: "Chief Operating Officer",
//     description: `- Mr. Tan has served as our Chief Operating Officer since October 2021. 
// - Mr. Tan is also the vice president of our holding subsidiary Shenzhen Gongwuyuan Network Technology Co., Ltd. since October 2021. 
// - Mr. Tan served as the general manager of the business unit in Shenzhen Diexun Technology Co., Ltd. from 2015 to 2018. 
// - Mr. Tan served as the general manager of the business department in Shenzhen Huanan Chengwang E-Commerce Co., Ltd. from 2012 to 2015. 
// - Mr. Tan served as the Director of Product Operations in Shenzhen Penghaiyun Electronic Data Interchange Co., Ltd. from 2007 to 2012.`,
//     image:
//       "https://res.cloudinary.com/aehl/image/upload/v1726250853/Bin_Tan_rlblvw.png",
//     linkedin: "",
//   },
  {
    name: "Dian Zhang",
    position: "Chief Financial Officer",
    description: `- Mr. Zhang has served as our Chief Financial Officer since June 2022. 
- Mr. Zhang worked as a headquarter analyst at Eaton Square M&A Advisory Firm in Australia from 2014 to 2020. 
- Mr. Zhang worked as an auditor at ShineWing Certified Public Accountants from 2009 to 2013. 
- Mr. Zhang holds a Bachelor Degree of Management Accounting from Aston University, a Master Degree of Banking and Finance from Monash University, and a Master Degree of Financial Management from the Australian National University. In addition, Mr. Zhang is a fellow member of the Association of Chartered Certified Accountants in the United Kingdom.
`,
    image:
      "https://res.cloudinary.com/aehl/image/upload/v1726250851/Dian_Zhang_btf9ui.png",
    linkedin: "",
  },
];

export default function ManagementTeam() {
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
