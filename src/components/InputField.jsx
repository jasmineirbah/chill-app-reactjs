export default function InputField({ label, type, placeholder }) {
  return (
    <div className="mb-4">
      <label className="text-white text-sm">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full mt-2 px-4 py-3 rounded-full bg-transparent border border-gray-500 text-white focus:outline-none"
      />
    </div>
  );
}
