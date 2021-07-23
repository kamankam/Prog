export default function University({ image, alt }) {
  return (
    <div>
      <img className="w-20 h-20 " src={image} alt={alt} />
    </div>
  );
}
