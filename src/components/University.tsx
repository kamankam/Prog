interface Props {
  image: string
  alt: string
}

export default function University({ image, alt }: Props) {
  return (
    <div>
      <img className="w-20 h-20" src={image} alt={alt} />
    </div>
  )
}
