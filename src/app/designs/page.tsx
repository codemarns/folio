import React from "react";
import { Hero, Designs as Design } from "./sections";
import data from "@/data/designs_data.json";

export default function Designs() {
  return (
    <>
      <div className="h-16 w-full" />
      <Hero data={data.hero_section} />
      <Design data={data.designs_section} />
    </>
  );
}
