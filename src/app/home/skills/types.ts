type HardSkills = {
  id: string;
  name: string;
  level: string;
  ratings: number;
};

type SoftSkills = {
  id: string;
  name: string;
};

type OtherSkills = {
  id: string;
  name: string;
};

type Data = {
  hard: HardSkills[];
  soft: SoftSkills[];
  others: OtherSkills[];
};

type Props = {
  title: string;
  skills: Data;
};

export type SkillsProps = {
  data: Props;
};
