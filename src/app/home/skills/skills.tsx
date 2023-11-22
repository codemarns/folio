"use client";

import { FC } from "react";
import cn from "classnames";
import { Container, Section } from "@/common";
import { Icon, Title } from "@/components";
import { skillsStyles } from "@/styles";
import { SkillsProps } from "./types";

export const Skills: FC<SkillsProps> = (props) => {
  const id = "skills";
  const { data } = props;
  const { title, skills } = data;
  const { hard, soft, others } = skills;

  const { root, content } = skillsStyles;

  const hard_skills = content.skills.hard.list;
  const soft_skills = content.skills.soft.list;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"}>
        <Title name={title} />

        <div className={hard_skills.base}>
          {hard.map((e) => {
            const item = hard_skills.item;

            const rating = [];
            const no_rating = [];
            const totalRating = 5;
            const remaining = totalRating - e.ratings;

            for (let i = 0; i < e.ratings; i++) {
              rating.push(
                <div
                  key={i}
                  className={cn(item.ratings.rating.base, {
                    [item.ratings.rating.color[1]]: i + 1 === 1,
                    [item.ratings.rating.color[2]]: i + 1 === 2,
                    [item.ratings.rating.color[3]]: i + 1 === 3,
                    [item.ratings.rating.color[4]]: i + 1 === 4,
                    [item.ratings.rating.color[5]]: i + 1 === 5,
                  })}
                />
              );
            }

            for (let i = 0; i < remaining; i++) {
              no_rating.push(
                <div key={i} className={item.ratings.no_rating} />
              );
            }

            return (
              <div key={e.id} className={item.base}>
                <div className={item.content.base}>
                  <span className={item.content.name}>{e.name}</span>
                  <span className={item.content.level}>{e.level}</span>
                </div>
                <div className={item.ratings.base}>
                  {rating}
                  {no_rating}
                </div>
              </div>
            );
          })}
        </div>

        <div className={soft_skills.base}>
          {others.map((e) => (
            <div key={e.id} className={soft_skills.item.base}>
              <Icon
                name="check"
                color="secondary"
                className={soft_skills.item.icon}
              />
              <span className={soft_skills.item.name}>{e.name}</span>
            </div>
          ))}
        </div>

        <div className={soft_skills.base}>
          {soft.map((e) => (
            <div key={e.id} className={soft_skills.item.base}>
              <Icon
                name="check"
                color="secondary"
                className={soft_skills.item.icon}
              />
              <span className={soft_skills.item.name}>{e.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
