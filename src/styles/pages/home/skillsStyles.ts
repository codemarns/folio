export const skillsStyles = {
  root: {
    base: "bg-[#26212b]",
  },
  content: {
    skills: {
      hard: {
        list: {
          base: "grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-12",
          item: {
            base: "space-y-2",
            content: {
              base: "flex items-center justify-between",
              name: "leading-none",
              level:
                "leading-none font-thin italic text-sm text-secondary-100",
            },
            ratings: {
              base: "h-1.5 w-full grid grid-cols-5 gap-1.5",
              rating: {
                base: "h-1.5 transform -skew-x-12",
                color: {
                  1: "bg-secondary",
                  2: "bg-[#B84CD6]",
                  3: "bg-[#C94BC2]",
                  4: "bg-[#DA4AAE]",
                  5: "bg-[#EC4899]",
                },
              },
              no_rating:
                "h-1.5 bg-transparent border border-secondary-800 transform -skew-x-12",
            },
          },
        },
      },
      others: {},
      soft: {
        list: {
          base: "grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-x-12 gap-y-4",
          item: {
            base: "grid grid-cols-[auto,_1fr] gap-3 items-center",
            icon: "text-2xl",
            name: "text-left capitalize",
          },
        },
      },
    },
  },
};
