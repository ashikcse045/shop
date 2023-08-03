import Layout from "../Layout";
import SelectBox from "../SelectBox";
import TextInput from "../TextInput";
import Textarea from "../Textarea";

const AddProduct = () => {
  return (
    <Layout>
      <div className="py-8 flex flex-row justify-between items-center box-border">
        {/* <!-- form --> */}
        <div className="w-1/2">
          <form action="" className="space-y-4">
            <TextInput id="title" name="title" label="title" />
            <TextInput id="price" name="price" label="price" />
            <TextInput id="image" name="image" label="image url" />

            <SelectBox
              name="category"
              options={[
                "electronics",
                "jewelery",
                "men's clothing",
                "women's clothing",
              ]}
            />

            <Textarea name="description" />

            <div>
              <button
                type="submit"
                className="block w-full uppercase mt-8 py-2 bg-primary text-gray-100 rounded-md"
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
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
      </div>
    </Layout>
  );
};
export default AddProduct;
