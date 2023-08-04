import { useState, useContext, useEffect } from "react";
import Layout from "../Layout";
import SelectBox from "../SelectBox";
import TextInput from "../TextInput";
import Textarea from "../Textarea";
import axios from "axios";
import GlobalContext from "../../contexts/GlobalContext";

const AddProduct = () => {
  const { dispatch } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.title = 'Add product';
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const postData = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "https://fakestoreapi.com/products",
        formData
      );
      setLoading(false);
      setError(false);
      console.log(response);
      if (response.status === 200) {
        dispatch({ type: "ADD", product: response.data });
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const isFormValid = Object.values(formData).every((value) => value !== "");
    if (isFormValid) {
      // console.log(formData);
      postData();
    } else {
      console.log("form is not valid");
    }
  };

  if (loading) {
    return (
      <div className="container">
        <h1>Submitting...</h1>
      </div>
    );
  }

  return (
    <Layout>
      <div className="py-8 flex flex-row justify-between items-center box-border">
        {/* <!-- form --> */}
        <div className="w-1/2">
          {error && <p className="text-red-500">* something wrong</p>}
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

            <div>
              <button
                type="submit"
                className="block w-full uppercase mt-8 py-2 bg-primary text-gray-100 rounded-md"
                onClick={handleClick}
              >
                add product
              </button>
            </div>
          </form>
        </div>

        {/* <!-- image --> */}
        <div className="w-1/2 p-8 overflow-hidden flex items-center">
          <img
            className="border border-gray-300 mx-auto w-2/3"
            src={formData.image}
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
};
export default AddProduct;
