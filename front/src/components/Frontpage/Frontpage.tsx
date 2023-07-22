import Header from "./Header/Header";
import Carousel from "../UI/Carousel";
import ProductCard from "../UI/ProductCard";
import { Slider, Slide } from "pure-react-carousel";
import { DUMMY_WEDDING_DRESS_ITEMS } from "../../assets/dummy-data";

const Frontpage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="lg:mt-24 lg:mb-32">
        <Carousel slides={DUMMY_WEDDING_DRESS_ITEMS.length}>
          <div className="md:max-w-screen-lg lg:max-w-screen-2xl w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <Slider>
              <div
                id="slider"
                className="h-full w-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700 md:py-2"
              >
                {DUMMY_WEDDING_DRESS_ITEMS.map((item, i) => (
                  <Slide index={i}>
                    <ProductCard product={item} />
                  </Slide>
                ))}
              </div>
            </Slider>
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default Frontpage;
