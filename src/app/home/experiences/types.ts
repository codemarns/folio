type Responsibility = {
  id: string;
  description: string;
};

type Award = {
  label: string;
  img: string;
};

type Data = {
  id: string;
  company_name: string;
  company_address: string;
  job_position: string;
  job_start: string;
  job_end: string;
  awards: Award;
  responsibilities: Responsibility[];
};

type Props = {
  title: string;
  experiences: Data[];
};

export type ExperienceProps = {
  data: Props;
};
