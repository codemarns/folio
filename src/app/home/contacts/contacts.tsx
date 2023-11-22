"use client";

import { Form } from "./components/form";
import { Details } from "./components/details";
import { Container, Section } from "@/common";
import { Title } from "@/components";
import { contactsStyles } from "@/styles";

export const Contacts = () => {
  const id = "contacts";
  const { root, content } = contactsStyles;
  return (
    <Section id={id} className={root.base}>
      <Container id={id + "_container"}>
        <Title name="Contacts" />
        <div className={content.base}>
          <Details />
          <Form />
        </div>
      </Container>
    </Section>
  );
};
