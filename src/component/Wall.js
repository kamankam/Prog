export default function Wall(text, inverted) {
  return (
    <div
      className={`flex p-4 ${
        inverted ? "flex-col-reverse" : "flex-col"
      } sm:flex-row`}
    >
      <div className={`p-2 ${inverted ? "hidden" : ""}`}>{text}</div>
      <div className="w-96 h-64 bg-red-400">Picture</div>
      <div className={`p-2 ${inverted ? "" : "hidden"}`}>{text}</div>
    </div>
  );
}
