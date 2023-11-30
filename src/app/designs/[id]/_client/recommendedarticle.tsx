"use client";

import React from "react";
import { CardV2 } from "@/components";
import { DesignProps } from "../../sections/designs/types";

type Props = {
  data: DesignProps[];
};

export const RecommendedArticle: React.FC<Props> = ({ data }) => {
  return (
    <div className="text-left space-y-6">
      <h3 className="text-xl font-semibold text-secondary">
        Other Tags
      </h3>
      <div className="grid grid-cols-1 gap-6">
        {data.map((item) => (
          <CardV2 key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
