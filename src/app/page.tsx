import { About, Contacts, Experiences, Hero, Skills } from "./home";
import { home_data as data } from "@/data";

export default function Home() {
  return (
    <>
      <Hero data={data.hero_section} />
      <About data={data.about_section} />
      <Skills data={data.skills_section} />
      <Experiences data={data.experiences_section} />
      <Contacts data={data.contact_section} />
    </>
  );
}
