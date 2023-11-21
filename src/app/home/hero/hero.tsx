"use client";

import { FC } from "react";
import { Button, Image } from "@/components";
import { heroStyles } from "@/styles";
import { HeroProps } from "./types";

export const Hero: FC<HeroProps> = (props) => {
  const { data } = props;
  const { img, greeting, name, position, cta } = data;

  const { root, container, column } = heroStyles;

  return (
    <section id="hero" className={root.base}>
      <div id="hero-container" className={container.base}>
        <div className={column.left.base}>
          <Image
            width="350px"
            corner="rounded"
            aspectRatio="1:1"
            alt={img.alt}
            src={img.url}
            thumbnail={img.thumbnail}
            className={column.left.image.base}
          />
        </div>

        <div className={column.right.base}>
          <div className={column.right.details.base}>
            <span className={column.right.details.greet.base}>{greeting}</span>
            <h1 className={column.right.details.name.base}>{name}</h1>
            <p
              className={column.right.details.title.base}
              style={{ WebkitTextFillColor: "transparent" }}
            >
              {position}
            </p>
          </div>
          <a href={cta} className={column.right.details.cta.link}>
            <Button
              size="xl"
              label="Hire Me"
              color="secondary"
              corner="rounded"
              className={column.right.details.cta.base}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
