"use client";

import React from "react";
import { Card } from "@/components";
import { DesignProps } from "../../sections/designs/types";

type Props = {
  data: DesignProps[];
};

export const RelatedTags: React.FC<Props> = ({ data }) => {
  if (!data.length) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-secondary">Related Tags</h3>
      <div className="grid grid-cols-2 gap-6">
        {data?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
