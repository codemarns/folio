/* eslint-disable @next/next/no-img-element */
import React, { useMemo } from "react";
import cn from "classnames";
import { imageStyles } from "@/styles";

export type ImageProps = React.HTMLAttributes<HTMLImageElement> & {
  alt: string;
  src: string;
  thumbnail: string;
  width?: string;
  aspectRatio?: "3.20:1" | "16:9" | "8:5" | "4:3" | "3:2" | "1:1";
  corner?: "flat" | "soft-edge" | "rounded";
};

export const Image: React.FC<ImageProps> = (props) => {
  const {
    className,
    alt,
    src,
    thumbnail,
    aspectRatio = "4:3",
    corner = "soft-edge",
    width,
  } = props;

  const COMPONENT = "cm-image";

  const switchAspectRatio = useMemo(() => {
    switch (aspectRatio) {
      case "3.20:1":
        return "46.875%";
      case "16:9":
        return "56.25%";
      case "8:5":
        return "62.5%";
      case "4:3":
        return "75%";
      case "3:2":
        return "66.66%";
      case "1:1":
        return "100%";
      default:
        return "75%";
    }
  }, [aspectRatio]);

  const { root, wrapper, overlay, img } = imageStyles;

  return (
    <div
      className={cn(className, COMPONENT, root.base, root.corner[corner])}
      style={{ maxWidth: width ?? "100%" }}
    >
      <div
        className={cn({ [COMPONENT + `__wrapper`]: COMPONENT }, wrapper.base)}
        style={{ paddingTop: switchAspectRatio }}
      >
        <div
          className={cn(
            { [COMPONENT + `__overlay`]: COMPONENT },
            overlay.base,
            overlay.corner[corner]
          )}
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <img
            src={src}
            alt={alt}
            loading="lazy"
            className={cn(
              { [COMPONENT + `__img`]: COMPONENT },
              img.base,
              img.corner[corner]
            )}
          />
        </div>
      </div>
    </div>
  );
};
