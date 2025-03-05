import { memo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextApi } from "../../context/Context";

const ProductHeader = ({ product }) => {
  const navigate = useNavigate();
  const { handleAddToCart, cartItems } = useContext(ContextApi);
  const navigateToProductDetails = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="relative group border border-cyan-700 p-6 cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-1">
        <img
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-xl"
          src={product?.thumbnail}
          alt={product?.title}
        />
      </div>
      <div className="flex items-start justify-between mt-4 space-x-4">
        <div className="font-bold text-gra-900 sm:text-sm text-xs md:text-base">
          <p
            title={product?.title}
            className="text-ellipsis w-[100px] overflow-hidden whitespace-nowrap"
          >
            {product?.title}
          </p>
        </div>
        <div className="text-right ">
          <p className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
            ${product?.price}
          </p>
        </div>
      </div>
      <div className="flex flex-col mt-5">
        <button
          onClick={() => navigateToProductDetails(product?.id)}
          className="px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg m-auto"
        >
          View Details
        </button>
        <button
          disabled={cartItems.some((item) => item.id === product?.id)}
          className="disabled:opacity-50 px-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg m-auto transition-opacity"
          onClick={() => handleAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default memo(ProductHeader);
