import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HomeHeader />
      <section className="flex flex-col items-center mt-24">
        <Image
          src="/google.webp"
          alt="Google Logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </section>
    </main>
  );
}
