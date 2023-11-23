"use client";

import cn from "classnames";
import React, { useMemo, useState } from "react";
import { Button, Image, Title } from "@/components";
import { Container, Section } from "@/common";

type Tag = "all" | "layout" | "component" | "css";

const arr = [
  {
    id: "button",
    topic: "Button",
    tag: "component",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "z-pattern-layout",
    topic: "Z Pattern Layout",
    tag: "layout",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "zoom-animation",
    topic: "Zoom Animation",
    tag: "css",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "image",
    topic: "Image",
    tag: "component",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "single-column-layout",
    topic: "Single Column Layout",
    tag: "layout",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
    blanditiis odit iste maxime odio! Reprehenderit saepe ipsum,
    impedit, sapiente eaque neque voluptate eos, aut doloribus
    architecto sunt voluptates nesciunt placeat.`,
  },
  {
    id: "card",
    topic: "Card",
    tag: "component",
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
    if (filterData === "component")
      return arr?.filter((e) => e.tag === "component");
    if (filterData === "layout") return arr?.filter((e) => e.tag === "layout");
    if (filterData === "css") return arr?.filter((e) => e.tag === "css");
    return arr;
  }, [filterData]);

  return (
    <Section id="works" className=" ">
      <Container id="works-container">
        <Title name="Designs" />

        <div className="flex items-center justify-center gap-2 border-b border-secondary-900/50">
          {tabMenu.map((menu) => (
            <Button
              key={menu.id}
              label={menu.label}
              onClick={() => setFilterData(menu.id as Tag)}
              className={cn(
                "!bg-transparent !text-current border-2 border-b-4 border-x-transparent border-t-transparent rounded-none",
                filterData === menu.id
                  ? "border-secondary"
                  : "border-transparent"
              )}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(285px,_1fr))] gap-12">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="group h-auto p-4 space-y-5 bg-secondary-900 rounded-xl shadow overflow-hidden hover:shadow-md duration-300 ease-in-out transition-all"
            >
              <Image
                alt="dummy"
                src="best-websites-for-color-theme-picker-video.png"
                thumbnail=""
                aspectRatio="4:3"
                corner="soft-edge"
              />
              <div className="min-h-[150px] w-full space-y-4 text-left">
                <div className="space-y-2">
                  <span className="block leading-none text-lg font-normal text-secondary">
                    {item.topic}
                  </span>
                  <span className="block leading-none text-sm uppercase opacity-50">
                    {item.tag}
                  </span>
                </div>
                <p className="line-clamp-4">{item.description}</p>
                <Button label="See Details" icon="arrow" layout="block" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
