import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ContextApi } from "../../context/Context";

const ProductDetails = () => {
  const { id } = useParams();
  const {
    cartItems,
    productsDetails,
    setProductsDetails,
    setLoading,
    loading,
    handleAddToCart,
  } = useContext(ContextApi);
  const fetchProductDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Something went wrong while try again later...");
      }
      const data = await response.json();
      if (data) {
        setProductsDetails(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading)
    return (
      <h1 className="text-[2rem] fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        Please Wait...
      </h1>
    );

  return (
    <div>
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto ">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-xl relative">
              <img
                className="w-4/5 rounded object-cover"
                src={productsDetails?.thumbnail}
                alt={productsDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {productsDetails?.images.length > 0
                ? productsDetails?.images.map((image, index) => (
                    <div className="rounded-xl p-4 shadow-md" key={index}>
                      <img
                        className="w-24 cursor-pointer"
                        src={image}
                        alt={`product${index}`}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="lg:col-span-2 ">
            <h2 className="text-2xl font-extrabold text-[#33333]">
              {productsDetails?.title}
            </h2>
            <div className="flex flex-wrap gap-4 mt-4">
              <p className="text-gray-900 font-bold text-xl">
                Price:${productsDetails?.price}{" "}
              </p>
            </div>
            <div>
              <button
                disabled={cartItems.some(
                  (item) => item.id === productsDetails?.id
                )}
                onClick={() => handleAddToCart(productsDetails)}
                className="min-w-[200px] px-4 py-3 border border-[#33333] bg-transparent text-sm font-semibold rounded mt-5"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
