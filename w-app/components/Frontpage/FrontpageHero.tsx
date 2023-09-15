/* eslint-disable @next/next/no-img-element */

const FrontpageHero: React.FC = () => {
  return (
    <section className="bg-primary pt-8">
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="justify-center ml-6 md:ml-24 ">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl mb-5">
            Lorem, ipsum dolor sit amet elit.
          </h1>
          <p className="mb-12 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            impedit quo molestias qui adipisci dicta repudiandae libero
            distinctio debitis doloribus temporibus itaque a molestiae
            laudantium ea, corrupti voluptas. Nesciunt, harum!
          </p>
          <a className="hidden sm:inline-block sm:w-2/7 lg:w-1/3 p-4 text-center text-white rounded-full bg-button-primary mr-4 font-extrabold text-md lg:text-lg cursor-pointer shadow-md transition-all duration-300 ease-in-out hover:bg-[#fb923c] hover:shadow-lg lg:hover:w-2/5 sm:hover:w-3/5">
            Rekisteröidy nyt
          </a>
          <a className="hidden sm:inline-block sm:w-2/7 lg:w-1/3 p-4 text-center text-[#343a40] rounded-full font-extrabold text-md  lg:text-lg bg-white cursor-pointer shadow-md transition-all duration-300 hover:bg-[#e9ecef]  hover:shadow-lg lg:hover:w-2/5 sm:hover:w-2/5 mb-24 md:mb-0">
            Lue lisää &darr;
          </a>
        </div>
        <div className="w-full md:w-2/3 mb-24">
          <img
            alt="Frontpage hero image"
            className="object-contain"
            src="/header/frontpage-header-img.jpg"
          />
        </div>
        <div className="flex flex-col gap-5 sm:hidden mx-16">
          <a className="inline-block w-full p-4 text-center text-white rounded-full bg-button-primary mr-4 font-extrabold text-md cursor-pointer shadow-md transition-all duration-300 ease-in-out hover:bg-[#fb923c] hover:shadow-lg">
            Rekisteröidy nyt
          </a>
          <a className="inline-block w-full p-4 text-center text-[#343a40] rounded-full font-extrabold text-md  bg-white cursor-pointer shadow-md transition-all duration-300 hover:bg-[#e9ecef]  hover:shadow-lg mb-16 ">
            Lue lisää &darr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FrontpageHero;
