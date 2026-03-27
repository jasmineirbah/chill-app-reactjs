export default function Button({ text, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={`w-full py-3 rounded-full mt-3 ${
        variant === "primary"
          ? "bg-gray-400 text-white"
          : "border border-gray-500 text-white"
      }`}
    >
      {text}
    </button>
  );
}