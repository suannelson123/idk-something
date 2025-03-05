import { useRoutes } from "react-router-dom";
import { CartList, ProductDetails, ProductList } from "./pages";
import Redirect from "./components/Redirect/Redirect";

function App() {
  const CustomRoutes = () => {
    let routes = useRoutes([
      { path: "/products", element: <ProductList /> },
      {
        path: "/",
        element: <Redirect />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/cart",
        element: <CartList />,
      },
    ]);
    return routes;
  };

  return (
    <>
      <div>
        <CustomRoutes />
      </div>
    </>
  );
}

export default App;
