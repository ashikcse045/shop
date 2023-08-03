import Img from "./Img";

const CartItem = () => {
  return (
    <div className="w-full h-28 flex flex-row items-center space-x-10">
      {/* <!-- image --> */}
      <div className="w-28 h-28 border border-gray-500 box-border flex items-center overflow-hidden">
        <Img url="https://images.unsplash.com/photo-1553456558-aff63285bdd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
      </div>

      {/* <!-- details --> */}
      <div className="w-1/2">
        <h1 className="text-xl font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          exercitationem!
        </h1>
      </div>
      {/* <!-- quantity --> */}
      <div className="w-1/4 text-center">
        <div className="flex flex-row items-center justify-center space-x-4">
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 p-1 text-lg border border-primary rounded-lg hover:bg-primary hover:text-gray-100 transition-colors"
          >
            -
          </button>
          <span className="inline-block p-1 text-lg">12</span>
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 p-1 text-lg border border-primary rounded-lg hover:bg-primary hover:text-gray-100 transition-colors"
          >
            +
          </button>
        </div>
        <button type="button" className="text-red-600 text-lg capitalize mt-4">
          remove
        </button>
      </div>
      {/* <!-- price --> */}
      <div className="w-1/4">
        <p className="text-primary">$120</p>
      </div>
    </div>
  );
};
export default CartItem;
