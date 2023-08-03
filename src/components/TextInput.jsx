/* eslint-disable react/prop-types */
const TextInput = ({id, name, label}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="capitalize block">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="block w-full border-2 border-gray-500 outline-none px-4 py-2 rounded-md"
      />
    </div>
  );
};
export default TextInput;
