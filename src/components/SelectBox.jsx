/* eslint-disable react/prop-types */
const SelectBox = ({ name, options = [] }) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="capitalize block">
        {name}
      </label>
      <select
        name={name}
        id={name}
        className="block w-full border-2 border-gray-500 outline-none px-4 py-2 rounded-md"
      >
        <option value="">selcct category</option>
        {options.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectBox;
