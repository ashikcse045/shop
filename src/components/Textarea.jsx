/* eslint-disable react/prop-types */
const Textarea = ({ name }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="capitalize block">
        description
      </label>
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="5"
        className="block w-full border-2 border-gray-500 outline-none px-4 py-2 rounded-md"
      ></textarea>
    </div>
  );
};
export default Textarea;
