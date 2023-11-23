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

          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="group h-auto p-4 space-y-5 bg-secondary-700 rounded-xl shadow overflow-hidden duration-300 ease-in-out transition-all"
              >
                <Image
                  alt="dummy"
                  src="https://dummyimage.com/600x400/2D1241/8d93a1.jpg"
                  thumbnail=""
                  aspectRatio="4:3"
                  corner="soft-edge"
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
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
