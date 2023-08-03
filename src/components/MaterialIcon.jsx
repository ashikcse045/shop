/* eslint-disable react/prop-types */
const MaterialIcon = ({ children }) => {
  return (
    <span className="material-symbols-outlined text-gray-600 hover:text-primary transition-colors">
      {children}
    </span>
  );
};
export default MaterialIcon;
