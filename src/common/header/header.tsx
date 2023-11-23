"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components";

export const Header = () => {
  return (
    <header className="fixed top-0 z-10 h-16 w-full px-4 sm:px-8 bg-default-950/50 backdrop-blur-md duration-300 ease-in-out transition-all">
      <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image alt="logo" src={"mc-logo.svg"} width={40} height={40} />
        </Link>
        <Link href={"/designs"}>
          <Button label="View Designs" color="secondary" size="sm" />
        </Link>
      </div>
    </header>
  );
};
