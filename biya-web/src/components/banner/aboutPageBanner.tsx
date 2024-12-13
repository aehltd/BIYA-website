import React from "react";


export default function AboutPageBanner() {
  return (
    <div>
      {/* Banner Section */}
      <div
        className="h-[85vh] flex"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/aehl/image/upload/v1734017694/BIYA_about_us_-1_on1sbm.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center pl-[3vh] md:pl-[10vh] lg:pl-[15vh]">
          <h1 className="font-dmSerif tracking-wider text-gray-800 text-4xl md:text-9xl font-bold pb-5">About Us</h1>
        </div>
      </div>
    </div>
  );
}