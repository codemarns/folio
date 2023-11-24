type Image = {
  alt: string;
  url: string;
  thumbnail?: string;
};

type Data = {
  img: Image;
  description: string;
};

export type HeroProps = {
  data: Data;
};
