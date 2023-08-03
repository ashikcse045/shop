/* eslint-disable react/prop-types */
const TextInput = ({name, label, value, handleChange}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="capitalize block">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        className="block w-full border-2 border-gray-500 outline-none px-4 py-2 rounded-md"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default TextInput;
