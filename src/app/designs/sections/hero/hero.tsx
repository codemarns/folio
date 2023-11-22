import { Container, Section } from "@/common";
import React from "react";

export const Hero = () => {
  const id = "hero";
  return (
    <Section
      id={id}
      className="min-h-[500px] flex items-center justify-center bg-secondary-900"
    >
      <Container id={id + "_container"}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sit
        quidem perferendis magnam illo, dolor delectus assumenda facere
        exercitationem earum recusandae libero asperiores quod possimus!
        Consequatur quas sequi corrupti vel.
      </Container>
    </Section>
  );
};
