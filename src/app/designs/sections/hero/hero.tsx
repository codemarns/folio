import Image from "next/image";
import React, { FC } from "react";
import { Container, Section } from "@/common";
import { designsHeroStyles } from "@/styles";
import { HeroProps } from "./types";

export const Hero: FC<HeroProps> = ({ data }) => {
  const id = "hero";
  const { root, img, description } = designsHeroStyles;

  return (
    <Section id={id} className={root.base}>
      <Image
        width={40}
        height={40}
        alt={data.img.alt}
        src={data.img.url}
        className={img.base}
      />
      <Container id={id + "_container"} size="lg">
        <p className={description.base}>{data.description}</p>
      </Container>
    </Section>
  );
};
