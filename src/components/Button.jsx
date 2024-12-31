export function Button({ color, text, onClick }) {
  return (
    <button
      type="button"
      className={`btn btn-${color} col-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
