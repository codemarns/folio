"use client";

import Image from "next/image";
import cn from "classnames";
import styled from "styled-components";
import React, { FC, useMemo, useState } from "react";
import { Button, Image as LocalImage, Title } from "@/components";
import { Container, Section } from "@/common";
import { DesignsProps, Tag } from "./types";

export const Designs: FC<DesignsProps> = ({ data }) => {
  const { title, tabmenu, designs } = data;
  const [filterData, setFilterData] = useState<Tag>("all");

  const filteredData = useMemo(() => {
    if (filterData === "component")
      return designs?.filter((e) => e.tag === "component");
    if (filterData === "layout")
      return designs?.filter((e) => e.tag === "layout");
    if (filterData === "css") return designs?.filter((e) => e.tag === "css");
    return designs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  return (
    <Section id="designs" className="">
      <Container id="designs-container">
        <Title name={title} />

        <div className="space-y-8">
          <div className="flex items-center justify-center gap-2 sm:gap-4 border-b border-default-900">
            {tabmenu.map((menu) => {
              const menuCount = () => {
                switch (menu.id) {
                  case "component":
                    return designs?.filter((e) => e.tag === "component").length;
                  case "layout":
                    return designs?.filter((e) => e.tag === "layout").length;
                  case "css":
                    return designs?.filter((e) => e.tag === "css").length;
                  default:
                    return designs.length;
                }
              };

              return (
                <Button
                  key={menu.id}
                  badge={menuCount()}
                  label={menu.label}
                  onClick={() => setFilterData(menu.id as Tag)}
                  className={cn(
                    "!bg-transparent !text-current text-sm xs:text-base !px-1 border-2 border-b-4 !border-x-transparent !border-t-transparent rounded-none whitespace-nowrap",
                    filterData === menu.id
                      ? "border-secondary !text-secondary"
                      : "border-transparent !text-default hover:border-secondary hover:!text-default"
                  )}
                />
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 duration-300 ease-in-out transition-all">
            {filteredData.map((item) => (
              <StyledCard
                key={item.id}
                className="group relative h-auto bg-[#26212b] border border-[#26212b] rounded-2xl shadow overflow-hidden duration-300 ease-in-out transition-all"
              >
                <LocalImage
                  alt={item.img.alt}
                  src={item.img.url}
                  thumbnail={item.img?.thumbnail ?? " "}
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
                      {item.topic}
                    </span>
                    <span className="block leading-none text-sm uppercase opacity-75">
                      {item.tag}
                    </span>
                  </div>
                  <p className="line-clamp-3">{item.description}</p>
                  <Button
                    layout="block"
                    icon="arrow-right"
                    label="See Details"
                    iconPosition="right"
                    className="!mt-5 hover:gap-4"
                  />
                </div>
              </StyledCard>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

const StyledCard = styled.div`
  &:hover {
    .cm-image img {
      scale: 1.1;
    }
  }
`;
