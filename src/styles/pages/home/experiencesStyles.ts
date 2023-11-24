export const experiencesStyles = {
  root: {
    base: "!pb-0",
  },
  content: {
    base: "relative pb-20 pt-8",
  },
  trophy: {
    rope: {
      base: "absolute left-1/2 sm:left-8 lg:left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#26212b] duration-300 ease-in-out transition-all",
    },
    circle: {
      base: "absolute -left-[calc(2rem-2px)] -top-1 w-16 h-16 flex items-center justify-center rounded-full bg-secondary outline outline-[1rem] outline-secondary/10",
    },
    ping: {
      base: "animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75",
    },
    icon: {
      base: "text-3xl drop-shadow",
    },
  },
  experiences: {
    base: "relative grid grid-cols-1 gap-10 pt-28",
    row: {
      base: "ITEM min-h-[200px] grid grid-cols-1 lg:grid-cols-2 duration-300 ease-in-out transition-all",
    },
    slot: {
      base: "py-0 sm:py-8 pl-0 sm:pl-16 lg:pl-8 pr-0 sm:pr-8 duration-300 ease-in-out transition-all",
    },
    container: {
      base: "relative h-full p-6 sm:p-8 grid grid-cols-1 gap-5 text-left bg-[#26212b] rounded-xl shadow-lg",
    },
    info: {
      base: "grid grid-cols-1 gap-2",
      daterange: {
        base: "opacity-70 text-sm",
      },
      company: {
        base: "text-lg font-bold text-secondary leading-tight",
      },
      position: {
        base: "text-lg leading-tight text-secondary",
      },
    },
    award: {
      base: "flex items-center justify-center gap-3 px-6 sm:px-8 py-2 -mx-6 sm:-mx-8 bg-gradient-to-r from-transparent via-secondary-800 to-transparent",
      icon: {
        base: "text-xl text-pink-500",
      },
      label: {
        base: "leading-none text-sm text-pink-500 truncate whitespace-nowrap",
      },
    },
    responsibility: {
      base: "pl-6 space-y-2.5",
      list: {
        base: "relative before:content-[''] before:absolute before:-left-6 before:top-[9px] before:w-2 before:h-2 before:rounded-full before:bg-secondary",
      },
    },
  },
};
