export default function Card({ children }) {
  return (
    <div className="bg-black/60 backdrop-blur-md p-8 rounded-2xl w-full max-w-md text-white">
      {children}
    </div>
  );
}