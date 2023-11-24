"use client";

import React, { FC, useMemo, useState } from "react";
import cn from "classnames";
import { designsStyles } from "@/styles";
import { Container, Section } from "@/common";
import { Button, Card, Title } from "@/components";
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

  const { root, tabMenu, tabContent } = designsStyles;

  return (
    <Section id="designs">
      <Container id="designs-container">
        <Title name={title} />

        <div className={root.base}>
          <div className={tabMenu.base}>
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
                    tabMenu.item.base,
                    filterData === menu.id
                      ? tabMenu.item.active
                      : tabMenu.item.inactive
                  )}
                />
              );
            })}
          </div>

          <div className={tabContent.base}>
            {filteredData.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
