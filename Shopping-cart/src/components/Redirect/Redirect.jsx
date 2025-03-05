import { useNavigate } from "react-router-dom";

const Redirect = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full h-full flex">
      <button
        onClick={() => navigate("/products")}
        className="m-auto bg-black text-white px-4 py-2 text-[1.2rem]"
      >
        Go to Products
      </button>
    </div>
  );
};

export default Redirect;
