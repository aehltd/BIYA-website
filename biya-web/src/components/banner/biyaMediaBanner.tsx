import Image from "next/image";

export default function BiyaMediaBanner() {
  return (
    <div className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/images/hotels-business-banner.webp"
        alt="Biya Media Banner"
        fill
        sizes="100vw"
        className="absolute top-0 left-0 object-cover"
      />
    </div>
  );
}
