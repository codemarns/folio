"use client";

import React from "react";
import { Image } from "@/components";
import { DesignProps } from "../../sections/designs/types";

export const Article: React.FC<DesignProps> = (props) => {
  return (
    <div key={props.id} className="space-y-4">
      <Image
        aspectRatio="16:9"
        corner="soft-edge"
        alt={props.img.alt}
        src={props.img.url}
        thumbnail={props.img.thumbnail ?? ""}
      />
      <div className="text-left">
        <h4 className="font-semibold leading-none text-secondary">
          {props.topic}
        </h4>
        <span className="text-sm leading-none capitalize opacity-50">
          {props.tag}
        </span>
        <p className="text-sm line-clamp-1">{props.description}</p>
      </div>
    </div>
  );
};
