import { useContext } from "react";
import { ContextApi } from "../../context/Context";
import ProductHeader from "../../components/productHeader/ProductHeader";

const ProductList = () => {
  const { products, loading } = useContext(ContextApi);

  if (loading)
    return (
      <h1 className="text-[2rem] fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
        Loading...
      </h1>
    );
  return (
    <header className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-950 sm:text-4xl">
            Our Featured Products
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductHeader key={product.id} product={product} />
            ))
          ) : (
            <h3>No Products Found...</h3>
          )}
        </div>
      </div>
    </header>
  );
};

export default ProductList;
