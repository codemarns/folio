export type Tag = "all" | "layout" | "component" | "css";

type ImageProps = {
  alt: string;
  url: string;
  thumbnail?: string;
};

export type DesignProps = {
  id: string;
  topic: string;
  tag: string;
  img: ImageProps;
  floating_img?: ImageProps;
  description: string;
};

type TabMenuProps = {
  id: string;
  label: string;
};

type Data = {
  title: string;
  tabmenu: TabMenuProps[];
  designs: DesignProps[];
};

export type DesignsProps = {
  data: Data;
};
