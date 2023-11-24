export const heroStyles = {
  root: {
    // min-h-screen 
    base: "lg:!min-h-[800px] w-full px-8 py-16 lg:py-20 flex items-center justify-center bg-gradient-to-b from-transparent from-30% to-[#26212b]",
  },
  container: {
    base: "h-fit w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[400px,_1fr] min-[1160px]:grid-cols-[500px,_1fr] xl:grid-cols-2 gap-0 items-center duration-300 ease-out transition-all",
  },
  column: {
    left: {
      base: "py-8 px-0 lg:px-8 flex items-center justify-center",
      image: {
        base: "p-8 before:content-[''] before:absolute before:inset-3 before:bg-secondary/10 before:rounded-full after:content-[''] after:animate-spin after:absolute after:inset-0 after:border-2 after:border-y-secondary/30 after:border-x-pink-500 after:rounded-full",
      },
    },
    right: {
      base: "py-8 px-0 lg:px-8 space-y-8 text-center lg:text-left",
      details: {
        base: "space-y-1 md:space-y-2",
        greet: {
          base: "text-base xs:text-lg md:text-xl",
        },
        name: {
          base: "text-3xl xs:text-4xl md:text-6xl text-secondary font-bold -ml-1 duration-300 ease-out transition-all",
        },
        title: {
          base: "text-base xs:text-lg md:text-xl inline-block bg-gradient-to-r from-secondary to-pink-500 bg-clip-text",
        },
        cta: {
          link: "inline-block",
          base: "tracking-wider",
        },
      },
    },
  },
};
