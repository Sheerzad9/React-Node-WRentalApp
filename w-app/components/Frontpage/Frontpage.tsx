"use client";
import FrontPageHero from "./FrontpageHero";
import Carousel from "../UI/Carousel";
import ProductCard from "../UI/ProductCard";
import { Slider, Slide, DotGroup } from "pure-react-carousel";
import { DUMMY_WEDDING_DRESS_ITEMS } from "../../public/dummy-data";
import signUpAvatar from "../../public/avatars/signup-avatar.svg";
import addProductAvatar from "../../public/avatars/add-product-avatar.svg";
import shoppingAvatar from "../../public/avatars/shopping.svg";
import deliveryAvatar from "../../public/avatars/delivery-avatar.svg";
import Image from "next/image";

const Frontpage: React.FC = () => {
  return (
    <>
      <FrontPageHero />
      <div className="flex items-center justify-center mt-32">
        <h1 className="text-4xl decoration-2 font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl mb-5 text-center">
          Kuinka homma toimii
        </h1>
      </div>
      <div className="flex flex-col p-24 md:flex-row justify-around mb-20 md:mt-20">
        <div className="flex flex-col items-center h-96 md:h-auto p-8 md:p-16 sm:p-20 bg-secondary rounded-md shadow-md hover:shadow-xl duration-300">
          <Image
            src={signUpAvatar}
            alt="avatar for sign up"
            className="w-60 h-80"
          />
          <div className="max-w-[250px] flex">
            <h2 className="text-lg md:text-xl font-semibold text-center text-stone-900">
              Rekisteröidy nopeasti
            </h2>
          </div>
        </div>
        <hr className="w-48 h-1 sm:hidden mx-auto my-4 bg-secondary border-0 rounded md:my-10" />
        <div className="flex flex-col items-center h-96 md:h-auto p-8 sm:p-20 bg-primary rounded-md shadow-md hover:shadow-xl duration-300">
          <Image
            src={addProductAvatar}
            alt="avatar for sign up"
            className="w-60 h-80"
          />
          <div className="max-w-[250px] flex">
            <h2 className="text-lg md:text-xl font-semibold text-center text-stone-900">
              Listaa häämekkosi vuokralle
            </h2>
          </div>
        </div>
        <hr className="w-48 h-1 sm:hidden mx-auto my-4 bg-secondary border-0 rounded md:my-10" />
        <div className="flex flex-col items-center h-96 md:h-auto p-4 sm:p-20 bg-secondary rounded-md shadow-md hover:shadow-xl duration-300">
          <Image
            src={shoppingAvatar}
            alt="avatar for sign up"
            className="w-60 h-80"
          />
          <div className="max-w-[250px] flex">
            <h2 className="text-lg md:text-xl font-semibold text-center text-stone-900">
              Katso tarjonta ja vuokraa vaivattomasti
            </h2>
          </div>
        </div>
        <hr className="w-48 h-1 sm:hidden mx-auto my-4 bg-secondary border-0 rounded md:my-10" />
        <div className="flex flex-col items-center h-96 md:h-auto p-8 sm:p-20 bg-primary rounded-md shadow-md hover:shadow-xl duration-300">
          <Image
            src={deliveryAvatar}
            alt="avatar for sign up"
            className="w-60 h-80"
          />
          <div className="max-w-[250px] flex">
            <h2 className="text-lg md:text-xl font-semibold text-center text-stone-900">
              Vastaanota tuote jopa seuraavana päivänä
            </h2>
          </div>
        </div>
      </div>
      <Carousel slides={DUMMY_WEDDING_DRESS_ITEMS.length}>
        <div className="max-w-[350px] md:max-w-screen-lg lg:max-w-screen-2xl w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
          <Slider>
            <div
              id="slider"
              className="h-full w-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700 md:py-2"
            >
              {DUMMY_WEDDING_DRESS_ITEMS.map((item, i) => (
                <Slide key={i} index={i}>
                  <DotGroup>
                    <ProductCard product={item} />
                  </DotGroup>
                </Slide>
              ))}
            </div>
          </Slider>
        </div>
      </Carousel>
    </>
  );
};

export default Frontpage;
