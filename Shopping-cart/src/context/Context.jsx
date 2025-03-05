import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
const ContextApi = createContext(null);

const ContextCartProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsDetails, setProductsDetails] = useState(null);
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      return JSON.parse(storedCartItems);
    }
    return [];
  });
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const FetchProductList = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error("Something went wrong while fetching");
      }
      const data = await response.json();
      if (data?.products && data?.products.length > 0) {
        setProducts(data?.products || []);
        setErr("");
      }
    } catch (error) {
      console.log(error);
      setErr(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = useCallback(
    (productItem) => {
      const existingItem = cartItems.find(
        (cItem) => cItem.id === productItem.id
      );
      if (!existingItem) {
        setCartItems((cItem) => [
          ...cItem,
          { ...productItem, quantity: 1, totalPrice: productItem?.price },
        ]);
      }
      navigate("/cart");
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [cartItems]
  );

  const handleIncrementDecrementQuantity = useCallback(
    (item, type) => {
      const updatedCartItems = cartItems.map((cItem) => {
        if (cItem.id === item.id) {
          const newQuantity =
            type === "increment" ? cItem.quantity + 1 : cItem.quantity - 1;

          if (newQuantity < 1) return cItem;

          return {
            ...cItem,
            quantity: newQuantity,
            totalPrice: newQuantity * cItem.price,
          };
        }
        return cItem;
      });
      setCartItems(updatedCartItems);
    },
    [cartItems]
  );
  const handleRemoveFromCart = useCallback(
    (item) => {
      const copyedCartItems = [...cartItems];
      const findIndex = copyedCartItems.findIndex(
        (cItem) => cItem.id === item.id
      );

      if (findIndex > -1) {
        copyedCartItems.splice(findIndex, 1);
      }
      if (copyedCartItems.length === 0) {
        localStorage.removeItem("cartItems");
      }
      setCartItems(copyedCartItems);
      // const updatedCartItems = cartItems.filter((cItem) => cItem.id !== item.id);
      // setCartItems(updatedCartItems);
    },
    [cartItems]
  );

  useEffect(() => {
    FetchProductList();
  }, []);
  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);
  const values = useMemo(
    () => ({
      products,
      loading,
      setLoading,
      cartItems,
      err,
      productsDetails,
      setProductsDetails,
      handleAddToCart,
      handleIncrementDecrementQuantity,
      handleRemoveFromCart,
    }),
    [
      products,
      loading,
      err,
      productsDetails,
      handleAddToCart,
      cartItems,
      handleIncrementDecrementQuantity,
      handleRemoveFromCart,
    ]
  );

  return <ContextApi.Provider value={values}>{children}</ContextApi.Provider>;
};
export { ContextApi, ContextCartProvider };
