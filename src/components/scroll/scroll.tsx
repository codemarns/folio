"use client";

import { useEffect, useState } from "react";
import cn from "classnames";
import { Button } from "../button/button";

export const ScrollToTop = () => {
  const [scroll, setScroll] = useState(false);
  const [position, setPosition] = useState("bottom-4");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setScroll(true);
        setPosition("bottom-4");
      } else {
        setScroll(false);
        setPosition("-bottom-4");
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!scroll) return null;

  return (
    <Button
      size="xl"
      icon="arrow-up"
      corner="rounded"
      color="secondary"
      className={cn(
        "animate-bounce fixed right-4 z-10 shadow-xl duration-300 ease-in-out transition-all",
        position
      )}
      onClick={scrollToTop}
    />
  );
};
