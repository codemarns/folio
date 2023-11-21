"use client";

import React from "react";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components";

const data = [
  {
    id: "home",
    link: "/",
    label: "Home",
  },
  {
    id: "about",
    link: "#about",
    label: "About",
  },
  {
    id: "skills",
    link: "#skills",
    label: "Skills",
  },
  {
    id: "experiences",
    link: "#experiences",
    label: "Experiences",
  },
  {
    id: "contacts",
    link: "#contacts",
    label: "Contacts",
  },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        "fixed top-0 z-10 h-16 w-full px-8 bg-default-950/90 backdrop-blur-lg duration-300 ease-in-out transition-all"
        // background
      )}
    >
      <div className="h-full w-full max-w-7xl mx-auto flex items-center justify-between bg-white/5">
        <div>Marnien Cueba</div>
        <nav>
          <ul className="flex items-center gap-1">
            <li>
              <Link
                className={cn(
                  "bg-white/5 h-10 px-5 flex items-center justify-center rounded-md duration-200 ease-in-out transition-all",
                  pathname === "/" ? "text-warning" : "hover:text-default-50"
                )}
                href={"#hero"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "bg-white/5 h-10 px-5 flex items-center justify-center rounded-md duration-200 ease-in-out transition-all",
                  pathname === "#about"
                    ? "text-warning"
                    : "hover:text-default-50"
                )}
                href={"#about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "bg-white/5 h-10 px-5 flex items-center justify-center rounded-md duration-200 ease-in-out transition-all",
                  pathname === "#skills"
                    ? "text-warning"
                    : "hover:text-default-50"
                )}
                href={"#skills"}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "bg-white/5 h-10 px-5 flex items-center justify-center rounded-md duration-200 ease-in-out transition-all",
                  pathname === "#experiences"
                    ? "text-warning"
                    : "hover:text-default-50"
                )}
                href={"#experiences"}
              >
                Experiences
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  "bg-white/5 h-10 px-5 flex items-center justify-center rounded-md duration-200 ease-in-out transition-all",
                  pathname === "#contacts"
                    ? "text-warning"
                    : "hover:text-default-50"
                )}
                href={"#contacts"}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
        <Button label="View My Works" color="secondary" />
      </div>
    </header>
  );
};
