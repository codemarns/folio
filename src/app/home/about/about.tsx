/* eslint-disable @next/next/no-img-element */
"use client";

import { FC } from "react";
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
      <img src={data.pattern} alt="pattern" className={pattern.base} />
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
