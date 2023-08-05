/* eslint-disable @next/next/no-img-element */
import { Product } from "../../public/dummy-data";
import Star from "./Star";

interface ProductCardProps {
  children?: React.ReactNode;
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-all hover:shadow-xl hover:skew-y-1 duration-300 relative sm:w-auto">
      <div className="flex relative">
        <a href="#">
          <img
            className="rounded-t-lg"
            src={product.productImage}
            alt="wedding dress"
          />
        </a>
      </div>
      <div className="p-5 flex flex-col">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <img
              alt="Profile picture of the listed account"
              className="w-12 drop-shadow-md"
              src={
                product.user.profileImage || "/avatars/user-profile-default.svg"
              }
            />
            <div className="flex">
              <Star
                amount={product.user.starRating}
                color="fill-yellow-400"
                size={{ height: "h-3", width: "w-3" }}
              />
              {product.user.starRating <= 4 && (
                <Star
                  amount={5 - product.user.starRating}
                  color="fill-gray-400"
                  size={{ height: "h-3", width: "w-3" }}
                />
              )}
            </div>
          </div>
          <p className="text-gray-700 ">{`${
            product.user.firstName
          }  ${product.user.lastName.charAt(0)}.`}</p>
          <div className="flex gap-2 ">
            <p className="font-bold text-gray-900 text-xl">{product.price}€</p>
            <p className="text-gray-400 text-xs self-center">per/pv</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-5">
        <p className="p-5 text-gray-900">{product.description}</p>
        <a className="inline-block w-5/6 sm:w-2/5 py-3 sm:py-4 text-center text-white rounded-full bg-button-primary mr-4 mb-4 font-bold tracking-wide text-xs sm:text-sm self-end cursor-pointer shadow-md transition-all duration-300 ease-in-out hover:bg-[#fb923c] hover:shadow-lg hover:w-3/4 sm:hover:w-3/5">
          Vuokraa nyt &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
