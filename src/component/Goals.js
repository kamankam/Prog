export default function Goals(image, label, text) {
  return (
    <div className=" flex flex-col">
      <img src={image} alt={label} />
      <div className="text-center">{text}</div>
    </div>
  );
}
