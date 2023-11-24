import React from "react";
import { Hero, Designs as Design } from "./sections";
import { designs_data as data } from "@/data";

export default function Designs() {
  return (
    <>
      <div className="h-16 w-full" />
      <Hero data={data.hero_section} />
      <Design data={data.designs_section} />
    </>
  );
}
