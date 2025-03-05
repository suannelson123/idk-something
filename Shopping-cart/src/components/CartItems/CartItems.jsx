import { MinusCircle, PlusCircle } from "lucide-react";
import { useContext } from "react";
import { ContextApi } from "../../context/Context";

const CartItems = ({ cartItems }) => {
  const { handleIncrementDecrementQuantity, handleRemoveFromCart } =
    useContext(ContextApi);
  return (
    <div className="max-h-[60vh] overflow-y-auto p-5 bg-gray-200 rounded-lg scrollbar-thin">
      {cartItems?.length > 0 ? (
        cartItems?.map((cItem) => (
          <div key={cItem.id} className="bg-gray-100 rounded-sm p-4 h-max">
            <h3 className="text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2">
              {cItem.title}
            </h3>
            <ul className="flex text-gray-700 mt-4 space-y-2">
              <img src={cItem.thumbnail} alt={cItem.title} />
              <div className="flex flex-col gap-2 justify-center">
                <p className="flex flex-wrap gap-1 text-sm font-bold">
                  Quantity:<span>{cItem.quantity}</span>
                </p>
                <div>
                  <p className="flex flex-wrap gap-1 text-sm font-bold">
                    Price <span>${cItem.totalPrice.toFixed(2)}</span>
                  </p>
                  <div className="flex gap-5 my-2 justify-center items-center">
                    <button
                      className="disabled:opacity-50"
                      disabled={cItem.quantity === 1}
                      onClick={() =>
                        handleIncrementDecrementQuantity(cItem, "decrement")
                      }
                    >
                      <MinusCircle
                        size={30}
                        className="hover:stroke-slate-400 transition-colors duration-300"
                      />
                    </button>
                    <button
                      onClick={() =>
                        handleIncrementDecrementQuantity(cItem, "increment")
                      }
                    >
                      <PlusCircle
                        size={30}
                        className="hover:stroke-slate-400 transition-colors duration-300"
                      />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(cItem)}
                  className="text-sm px-4 py-3 bg-black text-white font-extrabold rounded-lg "
                >
                  Remove
                </button>
              </div>
            </ul>
          </div>
        ))
      ) : (
        <h1 className="font-extrabold text-[2rem]">No items in cart</h1>
      )}
    </div>
  );
};

export default CartItems;
