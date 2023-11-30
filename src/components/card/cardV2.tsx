"use client";

import Link from "next/link";
import React, { FC } from "react";
import styled from "styled-components";
import { Image } from "@/components";
import { DesignProps } from "@/app/designs/sections/designs/types";
import { cardV2Styles } from "@/styles";

export const CardV2: FC<DesignProps> = (props) => {
  const { id, img, topic } = props;

  const { root } = cardV2Styles;

  return (
    <Link href={`/designs/${id}`} className="">
      <StyledCard id={id} className={root.base}>
        <Image
          corner="flat"
          aspectRatio="4:3"
          alt={img.alt}
          src={img.url}
          thumbnail={img?.thumbnail ?? ""}
          className={root.img.base}
        />
        <div className={root.details.base}>
          <span className={root.details.title.base}>{topic}</span>
        </div>
      </StyledCard>
    </Link>
  );
};

const StyledCard = styled.div`
  &:hover {
    .cm-image img {
      scale: 1.1;
    }
  }
`;
