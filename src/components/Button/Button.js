const Button = (props) => {
  const { children, style, onClick, className } = props;
  return (
    <button
      style={{ ...style }}
      className={className ? className : "btn"}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
