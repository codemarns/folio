export const designsStyles = {
  root: {
    base: "space-y-8",
  },
  tabMenu: {
    base: "flex items-center justify-center gap-2 sm:gap-4 border-b border-default-900",
    item: {
      base: "!bg-transparent !text-current text-sm xs:text-base sm:!h-14 !px-1 sm:!px-4 border-2 border-b-4 !border-x-transparent !border-t-transparent rounded-none whitespace-nowrap",
      active: "border-secondary !text-secondary",
      inactive:
        "border-transparent !text-default hover:border-secondary hover:!text-default",
    },
  },
  tabContent: {
    base: "grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-8 duration-300 ease-in-out transition-all",
  },
};
