export default function Goals(image, alt, text) {
  return (
    <div>
      <img src={image} alt={alt} />
      <div className="text-center">{text}</div>
    </div>
  );
}
