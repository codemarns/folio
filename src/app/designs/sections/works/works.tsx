import { Container, Section } from "@/common";
import { Image, Title } from "@/components";
import React from "react";

export const Works = () => {
  const data = [];
  const data_length = 25;
  for (let i = 0; i < data_length; i++) {
    data.push(
      <div
        key={i}
        className="h-auto p-4 bg-secondary-900 rounded-xl overflow-hidden hover:scale-105 duration-300 ease-in-out transition-all"
      >
        <Image
          alt="dummy"
          src="https://dummyimage.com/600x400/1e0a2c/4b5569.jpg"
          thumbnail=""
          aspectRatio="4:3"
          corner="soft-edge"
        />
        <div className="h-[150px] w-full p-4"></div>
      </div>
    );
  }

  return (
    <Section id="hero">
      <Container id="hero-container">
        <Title name="Designs" />

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(285px,_1fr))] gap-12">
          {data}
        </div>
      </Container>
    </Section>
  );
};
