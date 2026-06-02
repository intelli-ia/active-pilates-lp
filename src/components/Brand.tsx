import Image from "next/image";

export default function BrandSection() {
  return (
    <section className="w-full bg-white py-20 md:py-32 flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="Active Pilates"
        width={320}
        height={296}
        className="w-48 md:w-72 lg:w-80"
      />
    </section>
  );
}
