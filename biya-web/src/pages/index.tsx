import HomePageBanner from "../components/banner/homePageBanner";

import Image from 'next/image';

import Grid from "@mui/material/Grid2";

export default function Home() {
  return (
    <div>
      <HomePageBanner />
      <div className="container py-8">
        <Grid container spacing={2}>
          <Grid size={12}>
            <h1 className="text-black font-kanit font-bold tracking-widest py-4 text-4xl capitalize">
              Lean about our Business Model<span className="material-symbols-outlined text-7xl pl-1">enterprise</span>
            </h1>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            {/* <Typography variant="body1" gutterBottom>
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
            </Typography> */}
            <div className="px-4">
              <p>
                We, Baiya International Group Inc. (“Baiya”), are a Cayman Islands-based holding company operating in China through Shenzhen Gongwuyuan Network Technology Co., Ltd. (“Gongwuyuan”) and its subsidiaries.
                Since 2017, Gongwuyuan has offered job matching services and expanded in 2019 to include a cloud-based platform providing SaaS-enabled HR solutions.
                We continue to enhance our platform to integrate traditional and digital services, improving job matching and HR solutions in the flexible employment market.
              </p>
              <br />
              <p>
                Our business focuses on four key services in China&apos;s flexible employment market: job matching, entrusted recruitment, project outsourcing, and labor dispatching.
                We are reducing labor dispatching due to historically low profitability.
                Gongwuyuan aims to grow by enhancing its platform with digital technologies like crowdsourcing, big data, and AI, integrating these with offline services to deliver efficient job matching and SaaS-enabled HR solutions nationwide.
              </p>
            </div>

          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Image
              className="rounded-lg"
              src="https://res.cloudinary.com/aehl/image/upload/v1733326254/BIYA_cjet8q.png"
              alt="Business Description"
              width={700} // Replace with the actual width of the image
              height={500} // Replace with the actual height of the image
              priority // Optional: Use this if the image is critical and should load as a priority
            />
          </Grid>
          {/* <Grid size={12}> */}
          {/* Currently our business focuses on four (4) primary services: (i) job
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
            flexible employment marketplace throughout China. */}
          {/* <p>
              Our business focuses on four key services in China’s flexible employment market: job matching, entrusted recruitment, project outsourcing, and labor dispatching.
              We are reducing labor dispatching due to historically low profitability.
              Gongwuyuan aims to grow by enhancing its platform with digital technologies like crowdsourcing, big data, and AI, integrating these with offline services to deliver efficient job matching and SaaS-enabled HR solutions nationwide.
            </p> */}
          {/* </Grid> */}
        </Grid>
      </div>
    </div>
  );
}
