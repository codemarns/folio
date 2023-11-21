import { About, Hero } from "./home";
import { data } from "@/data/data";

export default function Home() {
  return (
    <>
      <Hero data={data.hero_section} />
      <About data={data.about_section} />
    </>
  );
}
