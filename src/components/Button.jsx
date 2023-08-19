const Button = ({ children = "Button", className }) => {
  return (
    <button
      className={`${className} text-md px-6 py-2 rounded-md border transition duration-300 hover:border-slate-700`}
    >
      {children}
    </button>
  );
};
Button.propTypes;
export default Button;
