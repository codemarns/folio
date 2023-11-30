export const cardV2Styles = {
  root: {
    base: "group relative h-auto bg-[#26212b] border border-[#26212b] rounded-2xl shadow overflow-hidden duration-300 ease-in-out transition-all",
    img: {
      base: "saturate-[.75] brightness-[.75] group-hover:saturate-100 group-hover:brightness-100 duration-300 ease-in-out transition-all",
    },
    details: {
      base: "absolute inset-0 px-5 py-4 flex items-end bg-gradient-to-b from-transparent via-transparent to-black/75",
      title: {
        base: "line-clamp-1 block leading-tight font-normal opacity-50 group-hover:opacity-100 group-hover:text-secondary duration-300 ease-in-out transition-all",
      },
    },
  },
};
