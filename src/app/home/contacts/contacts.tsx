"use client";

import { FC } from "react";
import { Title } from "@/components";
import { Container, Section } from "@/common";
import { contactsStyles } from "@/styles";
import { Form } from "./components/form";
import { Details } from "./components/details";
import { ContactsProps } from "./types";

export const Contacts: FC<ContactsProps> = (props) => {
  const id = "contacts";
  const { data } = props;
  const { root, content } = contactsStyles;

  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"}>
        <Title name={data.title} />
        <div className={content.base}>
          <Details data={data.details} />
          <Form data={data.form} />
        </div>
      </Container>
    </Section>
  );
};
