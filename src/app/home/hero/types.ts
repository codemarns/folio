type Image = {
  alt: string;
  url: string;
  thumbnail: string;
};

type Props = {
  img: Image;
  greeting: string;
  name: string;
  position: string;
  cta: string;
};

export type HeroProps = {
  data: Props;
};
