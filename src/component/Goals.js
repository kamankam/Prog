export default function Goals({ image, label, text }) {
  return (
    <div className=" flex flex-col ">
      <img className=" " src={image} alt={label} />
      <div className="text-center">{text}</div>
    </div>
  );
}
