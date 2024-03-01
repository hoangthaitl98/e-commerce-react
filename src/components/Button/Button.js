import "./Button.scss";

const ThemeButton = (props) => {
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

export default ThemeButton;
