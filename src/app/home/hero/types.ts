type Image = {
  alt: string;
  url: string;
  thumbnail: string;
};

type Data = {
  img: Image;
  greeting: string;
  name: string;
  position: string;
  cta: string;
};

export type HeroProps = {
  data: Data;
};
