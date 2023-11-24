"use client";

import cn from "classnames";
import styled from "styled-components";
import React, { useMemo, useState } from "react";
import { Button, Image, Title } from "@/components";
import { Container, Section } from "@/common";

type Tag = "all" | "layout" | "component" | "css";

const arr = [
  {
    id: "button",
    topic: "Button",
    tag: "component",
    img: "https://images.unsplash.com/photo-1526649661456-89c7ed4d00b8?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "z-pattern-layout",
    topic: "Z Pattern Layout",
    tag: "layout",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "zoom-animation",
    topic: "Zoom Animation",
    tag: "css",
    img: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "image",
    topic: "Image",
    tag: "component",
    img: "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "single-column-layout",
    topic: "Single Column Layout",
    tag: "layout",
    img: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "card",
    topic: "Card",
    tag: "component",
    img: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
];

const tabMenu = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "layout",
    label: "Layout",
  },
  {
    id: "component",
    label: "Component",
  },
  {
    id: "css",
    label: "CSS",
  },
];

export const Works = () => {
  const [filterData, setFilterData] = useState<Tag>("all");

  const filteredData = useMemo(() => {
    if (filterData === "component") return arr?.filter((e) => e.tag === "component");
    if (filterData === "layout") return arr?.filter((e) => e.tag === "layout");
    if (filterData === "css") return arr?.filter((e) => e.tag === "css");
    return arr;
  }, [filterData]);

  return (
    <Section id="works" className="">
      <Container id="works-container">
        <Title name="Designs" />

        <div className="space-y-8">
          <div className="flex items-center justify-center gap-0 xs:gap-2 sm:gap-4 border-b border-default-900">
            {tabMenu.map((menu) => {
              const menuCount = () => {
                switch (menu.id) {
                  case "component":
                    return arr?.filter((e) => e.tag === "component").length;
                  case "layout":
                    return arr?.filter((e) => e.tag === "layout").length;
                  case "css":
                    return arr?.filter((e) => e.tag === "css").length;
                  default:
                    return arr.length;
                }
              };

              return (
                <Button
                  key={menu.id}
                  label={menu.label + ` ${menuCount()}`}
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
                className="group relative h-auto p-5 space-y-5 bg-[#26212b] rounded-2xl shadow overflow-hidden duration-300 ease-in-out transition-all"
              >
                <Image
                  alt="dummy"
                  src={item.img}
                  // src="https://dummyimage.com/600x400/0B0C0F/8d93a1.jpg"
                  thumbnail=""
                  aspectRatio="4:3"
                  corner="soft-edge"
                  className="saturate-50 brightness-50 group-hover:saturate-100 group-hover:brightness-100 duration-300 ease-in-out transition-all"
                />
                <div className="min-h-[150px] w-full space-y-4 text-left text-default-50">
                  <div className="space-y-2">
                    <span className="block leading-none text-xl font-semibold">
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
`