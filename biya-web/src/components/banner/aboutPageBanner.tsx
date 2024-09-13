export default function HomePageBanner() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="h-[65vh] flex"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/aehl/image/upload/v1726244508/banner_yiityw.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container flex flex-col justify-center">
          <h1 className="pb-4 text-biya-gray text-3xl font-bold tracking-wider leading-loose  md:text-5xl">
            About Us
          </h1>
        </div>
      </div>
    </div>
  );
}
