"use client";

import { FC } from "react";
import Image from "next/image";
import { Title } from "@/components";
import { Container, Section } from "@/common";
import { aboutStyles } from "@/styles";
import { AboutProps } from "./types";

export const About: FC<AboutProps> = (props) => {
  const id = "about";
  const { data } = props;
  const { root, pattern, container, description } = aboutStyles;

  return (
    <Section id={id} className={root.base}>
      {data.pattern && (
        <Image
          width={1920}
          height={480}
          alt="pattern"
          src={data.pattern}
          className={pattern.base}
        />
      )}
      <Container id={id + "_container"} size="lg" className={container.base}>
        <Title name={data.title} />

        <div className={description.wrapper}>
          {data.description.map((desc, index) => (
            <p key={index} className={description.base}>
              {desc}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
};
