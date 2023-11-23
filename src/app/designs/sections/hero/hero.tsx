import React from "react";
import Image from "next/image";
import { Container, Section } from "@/common";

export const Hero = () => {
  const id = "hero";
  return (
    <Section
      id={id}
      className="relative min-h-[500px] flex items-center justify-center bg-[#221929]"
    >
      <Image
        alt="logo"
        src={"mc-logo.svg"}
        width={40}
        height={40}
        className="absolute -bottom-0 right-4 sm:right-8 md:right-16 w-[100px] sm:w-[150px] md:w-[200px] duration-150 ease-in-out transition-all"
      />
      <Container id={id + "_container"} size="lg" className="relative">
        <p className="px-4 sm:px-8 text-lg sm:text-xl text-default-50 leading-relaxed">
          {`
          Welcome to my page, your ultimate destination for mastering the art
          of frontend development! In the ever-evolving digital landscape,
          creating compelling, user-friendly, and visually appealing web
          interfaces is essential. Whether you're a seasoned developer looking
          to enhance your skills or a newcomer eager to embark on an exciting
          coding journey, our platform is designed to empower and inspire you.
          `}
        </p>
      </Container>
    </Section>
  );
};
