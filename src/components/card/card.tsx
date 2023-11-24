"use client";

import React, { FC } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Button, Image as LocalImage } from "@/components";
import { DesignProps } from "@/app/designs/sections/designs/types";

export const Card: FC<DesignProps> = (props) => {
  const { id, img, topic, description, tag } = props;

  return (
    <StyledCard
      id={id}
      className="group relative h-auto bg-[#26212b] border border-[#26212b] rounded-2xl shadow overflow-hidden duration-300 ease-in-out transition-all"
    >
      <LocalImage
        alt={img.alt}
        src={img.url}
        thumbnail={img?.thumbnail ?? " "}
        aspectRatio="4:3"
        corner="flat"
        className="saturate-50 brightness-50 group-hover:saturate-100 group-hover:brightness-100 duration-300 ease-in-out transition-all"
      />
      <div className="relative min-h-[150px] w-full p-5 space-y-4 text-left text-default-50">
        <Image
          alt="logo"
          src={"mc-logo.svg"}
          width={20}
          height={20}
          className="absolute -top-8 right-5 opacity-50"
        />
        <div className="!mt-0 space-y-2">
          <span className="block leading-none text-xl font-semibold group-hover:text-secondary duration-300 ease-in-out transition-all">
            {topic}
          </span>
          <span className="block leading-none text-sm uppercase opacity-75">
            {tag}
          </span>
        </div>
        <p className="line-clamp-3">{description}</p>
        <Button
          layout="block"
          icon="arrow-right"
          label="See Details"
          iconPosition="right"
          className="!mt-5 hover:gap-4"
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
