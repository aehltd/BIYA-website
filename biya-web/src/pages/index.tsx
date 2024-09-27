import HomePageBanner from "../components/banner/homePageBanner";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <div className="container py-8">
        <Grid container spacing={2}>
          <Grid size={12}>
            <Typography
              className="text-black font-bold tracking-widest py-4"
              variant="h4"
              component="h4"
            >
              Business Description
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>
            <Typography variant="body1" gutterBottom>
              We, Baiya International Group Inc. (“Baiya”), are an offshore
              holding company incorporated in the Cayman Islands. We are not a
              Chinese operating company, but an offshore holding company
              incorporated in the Cayman Islands. As a holding company, we have
              no material operations and conduct all of our operations in China
              through the VIE, Shenzhen Gongwuyuan Network Technology Co., Ltd.
              (“Gongwuyuan”), and its subsidiaries, collectively, “PRC operating
              entities”. Gongwuyuan started to provide job matching services in
              2017. In November 2019, Gongwuyuan began developing its
              cloud-based internet platform to provide one-stop crowdsourcing
              recruitment and SaaS-enabled HR solutions on the Gongwuyuan
              Platform to supplement its offline job matching services, and
              started to position itself as a SasS-enabled HR technology company
              by introducing its Gongwuyuan Platform in the flexible employment
              marketplace. We have been and will continue to strategically
              develop and improve the Gongwuyuan Platform with product features
              that work together with our traditional offline service model to
              improve the job matching and HR related services in the flexible
              employment marketplace.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }}>
            <img
              src="https://res.cloudinary.com/aehl/image/upload/v1726162472/image1_typfcr.png"
              alt="Business Description"
            ></img>
          </Grid>
          <Grid size={12}>
            Currently our business focuses on four (4) primary services: (i) job
            matching services; (ii) entrusted recruitment services; (iii)
            project outsourcing services; and (iv) labor dispatching services in
            the flexible employment market within China, primarily in the core
            manufacturing regions including the Pearl River Delta and Yangtze
            River Delta region. With respect to labor dispatching services,
            however, we are strategically reducing this service, considering the
            negative gross profit historically. Gongwuyuan plans to pursue its
            business growth by continuing to supplement its existing offline
            service model by introducing and integrating its Gongwuyuan Platform
            to provide better services in the flexible employment market
            throughout China. In addition, we plan to improve our services by
            continuing to develop and integrate digital technologies including
            crowdsourcing, big data and artificial intelligence to enhance the
            Gongwuyuan Platform. We believe these efforts will allow us to
            provide sufficient job matching and one-stop SaaS-enabled HR
            solutions to Customers, Employing Companies and workers in the
            flexible employment marketplace throughout China.
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
