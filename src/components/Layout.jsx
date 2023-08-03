/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
  return (
    <div className="w-full bg-gray-50 py-6">
      <div className="container">
        <div className="smallContainer">
            {children}
        </div>
      </div>
    </div>
  );
};
export default Layout;
