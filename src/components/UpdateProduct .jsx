/* eslint-disable react/prop-types */
import TextInput from "./TextInput";
import SelectBox from "./SelectBox";
import Textarea from "./Textarea";
import { useState } from "react";
import axios from "axios";

const UpdateProduct = ({ visible, hideBox, productDetails, dispatch }) => {
  const [formData, setFormData] = useState({
    title: productDetails.title,
    price: productDetails.price,
    category: productDetails.category,
    image: productDetails.image,
    description: productDetails.description,
  });

  const [loading, setLoading] = useState(false);

  const updateProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `https://fakestoreapi.com/products/${productDetails.id}`,
        formData
      );
      if (response.status === 200) {
        dispatch({ type: "UPDATE", updatedProduct: response.data });
        hideBox({ target: { id: "closeBtn" } });
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (isFormValid) {
      updateProduct();
    }
  };

  if (!visible) {
    return null;
  }

  return (
    <>
      <div
        onClick={hideBox}
        id="updateContainer"
        className="fixed inset-0 p-4 bg-black bg-opacity-70 backdrop-blur-[1px] flex items-center justify-center overflow-hidden"
      >
        <div className="bg-white pb-4 w-full md:w-3/4 lg:w-3/5 xl:w-1/2 rounded-md overflow-hidden">
          <div className="flex justify-end p-1">
            <span
              onClick={hideBox}
              id="closeBtn"
              className="material-symbols-outlined rounded-full hover:bg-primary hover:text-gray-100 p-2 cursor-pointer"
            >
              close
            </span>
          </div>
          <div className="px-8 max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col justify-between">
            <form action="" className="space-y-4">
              <TextInput
                name="title"
                label="title"
                handleChange={handleChange}
                value={formData.title}
              />
              <TextInput
                name="price"
                label="price"
                handleChange={handleChange}
                value={formData.price}
              />
              <TextInput
                name="image"
                label="image url"
                handleChange={handleChange}
                value={formData.image}
              />

              <SelectBox
                handleChange={handleChange}
                value={formData.category}
                name="category"
                options={[
                  "electronics",
                  "jewelery",
                  "men's clothing",
                  "women's clothing",
                ]}
              />

              <Textarea
                name="description"
                handleChange={handleChange}
                value={formData.description}
              />

              {/* submit button */}
              <div>
                <button
                  type="submit"
                  className="block w-full uppercase mt-8 py-2 bg-primary text-gray-100 rounded-md"
                  onClick={handleClick}
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {loading && (
        <div className="fixed inset-0 p-4 bg-black bg-opacity-70 flex items-center justify-center overflow-hidden">
          <span className="material-symbols-outlined text-8xl text-gray-50 animate-spin">
            autorenew
          </span>
        </div>
      )}
    </>
  );
};
export default UpdateProduct;
