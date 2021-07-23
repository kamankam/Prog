export default function Wall({ text, image, index }) {
  const inverted = index % 2

  return (
    <div
      className={`flex p-4 ${inverted ? "flex-col-reverse" : "flex-col"
        } sm:flex-row`}
    >
      <div className={` text-blue-700 p-2 ${inverted ? "hidden" : ""}`}>
        {text}
      </div>
      <img className="w-96 h-64" src={image} />
      <div className={`text-red-700  p-2 ${inverted ? "" : "hidden"}`}>
        {text}
      </div>
    </div>
  );
}
