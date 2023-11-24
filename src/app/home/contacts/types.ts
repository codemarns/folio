export type FormProps = {};

type ContactProps = {
  id: string;
  icon: string;
  label: string;
};

export type DetailProps = {
  heading: string[];
  text: string;
  contacts: ContactProps[];
};

type Data = {
  title: string;
  details: DetailProps;
  form: FormProps;
};

export type ContactsProps = {
  data: Data;
};
