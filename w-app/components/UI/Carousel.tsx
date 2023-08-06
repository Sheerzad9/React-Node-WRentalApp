import { CarouselProvider, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const MyCarouselButton: React.FC<{ isForward: boolean }> = ({ isForward }) => {
  return isForward ? (
    <ButtonNext
      role="button"
      aria-label="slide forward"
      className="bg-gray-800 absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
      id="next"
    >
      <svg
        className="w-6 h-6 p-2"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L7 7L1 13"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonNext>
  ) : (
    <ButtonBack
      role="button"
      aria-label="slide backward"
      className="bg-gray-800 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
      id="prev"
    >
      <svg
        className="w-6 h-6 p-2"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 1L1 7L7 13"
          stroke="white"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </ButtonBack>
  );
};

const Carousel: React.FC<{ children: React.ReactNode; slides: number }> = ({
  children,
  slides,
}) => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 sm:px-4">
        {/* Carousel for desktop and large size devices */}
        <CarouselProvider
          className="lg:block hidden"
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
          totalSlides={slides}
          visibleSlides={4}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <MyCarouselButton isForward={false} />
            {children}
            <MyCarouselButton isForward={true} />
          </div>
        </CarouselProvider>

        {/* Carousel for tablet and medium size devices */}
        <CarouselProvider
          className="lg:hidden md:block hidden"
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
          totalSlides={slides}
          visibleSlides={2}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <MyCarouselButton isForward={false} />
            {children}
            <MyCarouselButton isForward={true} />
          </div>
        </CarouselProvider>

        {/* Carousel for mobile and Small size Devices */}
        <CarouselProvider
          className="block md:hidden max-w-[350px]"
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          isIntrinsicHeight={true}
          totalSlides={slides}
          visibleSlides={1}
          step={1}
          infinite={true}
        >
          <div className="w-full relative flex items-center justify-center">
            <MyCarouselButton isForward={true} />
            {children}
            <MyCarouselButton isForward={true} />
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
};

export default Carousel;
