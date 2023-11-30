"use client";

import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button, Image as LocalImage } from "@/components";
import { DesignProps } from "@/app/designs/sections/designs/types";
import { cardStyles } from "@/styles";

export const Card: FC<DesignProps> = (props) => {
  const { id, img, floating_img, topic, tag, description } = props;

  const { root } = cardStyles;

  return (
    <StyledCard id={id} className={root.base}>
      <LocalImage
        corner="flat"
        aspectRatio="4:3"
        alt={img.alt}
        src={img.url}
        thumbnail={img?.thumbnail ?? ""}
        className={root.img.base}
      />
      <div className={root.details.base}>
        <Image
          width={20}
          height={20}
          alt={floating_img?.alt ?? ""}
          src={floating_img?.url ?? ""}
          className={root.details.floatingImg.base}
        />
        <div className={root.details.primaryInfo.base}>
          <span className={root.details.primaryInfo.title.base}>{topic}</span>
          <span className={root.details.primaryInfo.tag.base}>{tag}</span>
        </div>

        <p className={root.details.description.base}>{description}</p>
        <Button
          layout="block"
          icon="arrow-right"
          label="See Details"
          iconPosition="right"
          className={root.details.cta.base}
        />
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  &:hover {
    .cm-image img {
      scale: 1.1;
    }
  }
`;
