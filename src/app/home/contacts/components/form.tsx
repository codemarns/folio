"use client";

import { useState } from "react";
import cn from "classnames";
import { Button } from "@/components";
import { contactsStyles } from "@/styles";

export const Form = () => {
  const [state, setState] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("This feature is currently in development!");
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const { form } = contactsStyles;

  return (
    <div className={form.wrapper}>
      <form action="" className={form.base} onSubmit={(e) => onSubmit(e)}>
        <h3 className={form.heading.base}>Send Message</h3>
        <input
          type="text"
          id="fullname"
          name="fullname"
          placeholder="Full Name"
          className={cn(form.field.base, form.field.input)}
          value={state.fullname}
          onChange={onInputChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={cn(form.field.base, form.field.input)}
          value={state.email}
          onChange={onInputChange}
        />
        <textarea
          cols={30}
          rows={5}
          id="message"
          name="message"
          placeholder="Message..."
          className={cn(form.field.base, form.field.textarea)}
          value={state.message}
          onChange={onTextAreaChange}
        />
        <Button
          size="lg"
          type="submit"
          color="secondary"
          icon="paperplane"
          label="Send Message"
        />
      </form>
    </div>
  );
};
