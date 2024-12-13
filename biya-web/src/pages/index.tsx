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
        </Grid>
      </div>
    </div>
  );
}
