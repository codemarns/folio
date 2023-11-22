"use client";

import { Icon } from "@/components";
import { contactsStyles } from "@/styles";

const data = [
  {
    id: "phone",
    icon: "phone",
    label: "+63 922 422 6708",
  },
  {
    id: "whatsapp",
    icon: "whatsapp",
    label: "+63 922 422 6708",
  },
  {
    id: "mail",
    icon: "mail",
    label: "marniencueba94@gmail.com",
  },
  {
    id: "linkedin",
    icon: "linkedin",
    label: "https://www.linkedin.com/in/marnien-cueba-96a419200/",
  },
  {
    id: "github",
    icon: "github",
    label: "https://github.com/codemarns",
  },
];

export const Details = () => {
  const { details } = contactsStyles;
  return (
    <div className={details.base}>
      <h2 className={details.heading.base}>
        {`Let's chat`}
        <br />
        {`and discuss your project.`}
      </h2>

      <p className={details.quote.base}>
        We will turn your dreams into reality.
      </p>

      <ul className={details.contacts.base}>
        {data.map((e) => (
          <li key={e.id} className={details.contacts.list.base}>
            <Icon
              name={e.icon}
              color="secondary"
              className={details.contacts.list.icon}
            />
            <span className={details.contacts.list.label}>{e.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
