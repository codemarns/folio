export const cardStyles = {
  root: {
    base: "group relative h-auto bg-[#26212b] border border-[#26212b] rounded-2xl shadow overflow-hidden duration-300 ease-in-out transition-all",
    img: {
      base: "saturate-50 brightness-50 group-hover:saturate-100 group-hover:brightness-100 duration-300 ease-in-out transition-all",
    },
    details: {
      base: "relative min-h-[150px] w-full p-5 space-y-4 text-left text-default-50",
      floatingImg: {
        base: "absolute -top-8 right-5 opacity-50",
      },
      primaryInfo: {
        base: "!mt-0 space-y-2",
        title: {
          base: "block leading-none text-xl font-semibold group-hover:text-secondary duration-300 ease-in-out transition-all",
        },
        tag: {
          base: "block leading-none text-sm uppercase opacity-50",
        },
      },
      description: {
        base: "line-clamp-3",
      },
      cta: {
        base: "!mt-5 hover:gap-4",
      },
    },
  },
};
