import headerImg from "../../../assets/header/frontpage-header-img.jpg";

const Header: React.FC = () => {
  return (
    <section className="bg-[#FDF2E9] pt-8">
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 items-center">
        <div className="justify-center ml-6 md:ml-24 ">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-7xl mb-5">
            Lorem, ipsum dolor sit amet elit.
          </h1>
          <p className="mb-12 text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            impedit quo molestias qui adipisci dicta repudiandae libero
            distinctio debitis doloribus temporibus itaque a molestiae
            laudantium ea, corrupti voluptas. Nesciunt, harum!
          </p>
          <a className="inline-block sm:w-1/3 p-4 text-center text-[#f1f3f5] rounded-full bg-[#e67e22] mr-4 font-extrabold text-lg cursor-pointer shadow-md text-white transition-all duration-300 ease-in-out hover:bg-[#fb923c] hover:shadow-lg hover:w-2/5">
            Register now
          </a>
          <a className="inline-block sm:w-1/3 p-4 text-center text-[#343a40] rounded-full font-extrabold text-lg bg-white cursor-pointer shadow-md transition-all duration-300 hover:bg-[#e9ecef]  hover:shadow-lg hover:w-2/5 mb-24 md:mb-0">
            Browse more &darr;
          </a>
        </div>
        <div className="w-full md:w-2/3">
          <img className="object-contain" src={headerImg}></img>
        </div>
      </div>
    </section>
  );
};

export default Header;
